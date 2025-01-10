'use client'

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import './catAnimation.css';

export default function PlayStoreBlog() {
  return (
    <>
      <div className="cat-container">
        <div className="cat"></div>
      </div>

      <main className="flex-grow max-w-[888px] p-8 mx-auto lg:pt-12 text-base">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl mb-6 font-bold">The Google Play Store: A Developer's Nightmare</h1>
        
        <section className="mb-8">
          <p className="mb-4">As an Android developer, I've had my fair share of experiences with the Google Play Store. While Android development itself can be quite enjoyable, the process of publishing and maintaining apps on the Play Store is a different story altogether.</p>
          
          <p className="mb-4">Recently, I came across a video that perfectly encapsulates the frustrations many developers face when dealing with the Play Store:</p>
          
          <div className="mb-4">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UMiB5Z7n6Y8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          
          <p className="mb-4">This video validates everything I've come to dislike about the Play Store's practices and policies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">The Good Parts of Android Development</h2>
          <p className="mb-4">Before diving into the issues, it's worth noting that Android development itself has many positive aspects:</p>
          <ul className="list-disc list-inside mb-4">
            <li>The ecosystem is open and accessible</li>
            <li>Documentation exists (though it could be better)</li>
            <li>It's relatively easy to run and debug apps on devices</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">The Play Store: Where Things Fall Apart</h2>
          <p className="mb-4">The real problem lies with the Google Play Store. It seems that everyone working at the Play Store is actively trying to take down apps for trivial reasons that users don't even care about.</p>
          
          <p className="mb-4">The inconsistencies in the Play Store's policies are mind-boggling. One minute, your app is rejected for using a library that's explicitly allowed, and the next minute, your app is rejected for using a library that's explicitly forbidden.</p>
        </section>
      </main>
    </>
  );
}
