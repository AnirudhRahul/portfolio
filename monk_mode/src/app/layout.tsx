import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "./globals.css";
import "./blogs/sam2/catAnimation.css";
import { cookies } from 'next/headers';
import Cat from "./Cat";
import dynamic from 'next/dynamic';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ani Rahul",
  description: "Generated by create next app",
};

function pseudoRandom(seed: number): number {
  return (seed * 1664525 + 1013904223) % 4294967296;
}

// Add these constants at the top of the file
const ANIMATION_DURATION = 10; // in seconds
const TOTAL_CATS = 20;

// Dynamically import the AsciiCat component to avoid server-side rendering issues
const AsciiCat = dynamic(() => import('./AsciiCat'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  const isDarkMode = theme ? theme.value === 'dark' : false;

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-mono text-black dark:text-[#D4D4D4] bg-white dark:bg-[#1A191A]`}
      >
        <div className="flex-grow">
          {children}
        </div>
        <div className="relative" style={{ marginBottom: '-15px' }}>
          <AsciiCat />
          <div className="relative overflow-hidden" style={{ height: '50px' }}>
            <p className="text-lg whitespace-nowrap overflow-hidden dark:text-[#CE9178]">
              {'(ᵔᴥᵔ)'.repeat(1000)}
            </p>
          </div>
        </div>
        <footer className="text-center text-sm mt-2 pb-2 mb-2 sm:mb-0 text-gray-700 dark:text-[#6A9955]">
          <a href="https://github.com/AnirudhRahul" className="text-blue-600 hover:underline mr-4">GitHub</a>
          <a href="https://www.linkedin.com/in/anirudh-rahul-34a2bb195" className="text-blue-600 hover:underline mr-4">LinkedIn</a>
          <a href="https://x.com/Ani_da_dev" className="text-blue-600 hover:underline">Twitter</a>
          <p className="mt-2"><em>All truly strong people are kind.</em></p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
