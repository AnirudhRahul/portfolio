import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-serif text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl mb-8 font-bold font-sans">Projects</h1>
        
        <nav className="mb-12">
          <ul className="flex space-x-4 font-mono text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/experience" className="hover:underline">Experience</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>

        <ul className="space-y-8">
          <li>
            <h2 className="text-2xl mb-2 font-semibold font-sans">Opsu!</h2>
            <p className="mb-2">Primary maintainer for the android game Opsu! Implemented scalable global leaderboard and auth solution for over 100k users.</p>
            <p className="font-mono text-sm">Java, Android, DynamoDB, Lambda, Node.js</p>
          </li>
          <li>
            <h2 className="text-2xl mb-2 font-semibold font-sans">Reddit Embed</h2>
            <p className="mb-2">Frontend JavaScript library to embed full Reddit posts, including comments, on other sites.</p>
            <p className="font-mono text-sm">JavaScript, CSS, Reversing</p>
          </li>
          <li>
            <h2 className="text-2xl mb-2 font-semibold font-sans">HackMIT Puzzle</h2>
            <p className="mb-2">Created an algorithm-based minigame smart contract for HackMIT 2021's final puzzle.</p>
            <p className="font-mono text-sm">Solidity, Node.js, Redis</p>
          </li>
        </ul>

        <footer className="text-center text-sm font-mono mt-16">
          <a href="https://github.com/AnirudhRahul" className="hover:underline mr-4">GitHub</a>
          <a href="https://www.linkedin.com/in/anirudh-rahul-34a2bb195" className="hover:underline">LinkedIn</a>
        </footer>
      </main>
    </div>
  );
}