'use client'

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SAM2Blog() {
  return (
    <>
      <div className="cat-container">
        <div className="cat"></div>
      </div>

      <main className="flex-grow max-w-[888px] p-8 mx-auto lg:pt-12 text-base">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl mb-6 font-bold">Making the Fastest SAM2 API: The Great GIL Bypass</h1>
        
        <section className="mb-8">
          <p className="mb-4">SAM2 is an interesting model, as it's one of the first real-time foundation video models. While LLMs and VLMs output data at &lt;1Mb/s even at 100,000 tokens/sec, a SAM2 model outputting frame-by-frame data for 1080p @ 60fps pushes out around &gt;100Mb/s.</p>
          
          <p className="mb-4">When developing a SAM2-assisted labeling UI for @overeasy.sh, we quickly hit a bottleneck: getting SAM2 to work at native speeds over an API was incredibly challenging.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">The Challenges</h2>
          <ul className="list-disc list-inside mb-4">
            <li>With 16.67ms per frame at 60fps, every clock cycle counts, especially in Python.</li>
            <li>SAM2's frame loader had memory issues, potentially causing OOM errors for long videos.</li>
            <li>We needed to send generated data over the network while maintaining the output frame rate.</li>
            <li>All of this had to be done in Python.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Fixing the FrameLoader</h2>
          <p className="mb-4">[Your content about fixing the FrameLoader goes here]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Sending the Data</h2>
          <p className="mb-4">This is where Python really starts to become painful.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">The Solution: Multiprocessing with Shared Memory</h2>
          <p className="mb-4">While writing a C extension is a classic way to escape the GIL and achieve near-native performance in Python, the development time can be slow. Given our need for speed, we opted for a more unconventional solution: multiprocessing with shared memory.</p>
          
          <p className="mb-4">Unlike multi-threading in Python, multi-processing runs separate instances of the Python interpreter, bypassing the GIL limitation. This allows us to potentially achieve full utilization of multiple CPU cores.</p>
          
          <p className="mb-4">[You can add more details about your implementation here]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Conclusion</h2>
          <p className="mb-4">By thinking outside the box and leveraging multiprocessing with shared memory, we were able to create a high-performance SAM2 API in Python, overcoming the limitations of the GIL and achieving near-native speeds.</p>
        </section>
      </main>
    </>
  );
}
