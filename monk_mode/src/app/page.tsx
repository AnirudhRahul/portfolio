'use client'

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!animationTriggered) {
        triggerAnimation();
        setAnimationTriggered(true);
      }
    };

    const triggerAnimation = () => {
      if (titleRef.current && subtitleRef.current) {
        gsap.to(titleRef.current, {
          duration: 2,
          scrambleText: { text: "Hi, I'm Ani", chars: "01", revealDelay: 0.5 },
          ease: "power2.inOut",
        });

        gsap.to(subtitleRef.current, {
          duration: 2,
          scrambleText: { text: "I like to code :)", chars: "01", revealDelay: 0.5 },
          ease: "power2.inOut",
        });
      }
    };

    const isSmallScreen = window.innerWidth < 520; // Adjust this breakpoint as needed

    if (isSmallScreen) {
      // window.addEventListener('scroll', handleInteraction, { once: true });
      window.addEventListener('touchstart', handleInteraction, { once: true });
    } else {
      // For larger screens, keep the 6-second delay
      const timer = setTimeout(triggerAnimation, 4269);
      return () => clearTimeout(timer);
    }

    return () => {
      // window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [animationTriggered]);

  return (
    <main className="max-w-[720px] p-8 mx-auto lg:pt-12 text-base">
      <h1 ref={titleRef} className="text-4xl mb font-bold">Anirudh Rahul</h1>
      <p ref={subtitleRef} className="text-xl mb-6 font-light">MIT EECS grad</p>
      
      <section className="mb-8">
        <p className="mb-4">
          <span className="text-[#6A9955]">/* Math & CS contests <br/>
             &nbsp;&nbsp;&nbsp;&nbsp; USACO Platinum qualifier + FL state champion */</span>
        </p>
        <p className="mb-4">
          <span className="text-[#6A9955]">// Head of Software @ HackMIT</span>
        </p>
        <p className="mb-4">
          <span className="text-[#6A9955]">// Jane Street: Cache optimization, S-expr deduplication</span>
        </p>
        {/* <p className="mb-4">
          Building Cracked (YC S24)
        </p> */}
        <p className="mb-4">
          I&apos;m doing ML @ David AI working on all things audio quality
        </p>
      </section>

      <section className="mb-8">
        <p className="mb-4">
          <strong>Fav classes</strong>
        </p>
        <ul className="list-disc list-inside">
          <CourseDetail name={"6.869&nbsp;&nbsp;Advances In Computer Vision"} details="Studied traditional CV techniques like GANs - Created an anime style transfer model" />
          <CourseDetail name={"6.815&nbsp;&nbsp;Computational Photography"} details="Delved into traditional image processing - Built a panoramic image stitcher" />
          <CourseDetail name={"6.S898&nbsp;Deep Learning"} details="Studied contrastive learning under Phillip Isola" />
          <CourseDetail name={"6.046&nbsp;&nbsp;Advanced Algorithms"} details="Learned about linear programming which is a really useful technique, that I then used in my next internship lol." />
          <CourseDetail name={"6.824&nbsp;&nbsp;Distributed Systems"} details="Learned about Paxos, Raft, and other distributed systems things." />
        </ul>
      </section>

      <section className="mb-8">
        <p className="mb-4"><strong>Tech Blogs: </strong></p>
        <BlogDetail 
          name="Finetuning YOLO models on modal" 
          details="Very randomly had some code I wrote turned into an example blog on modal" 
          link="https://modal.com/docs/examples/finetune_yolo#fine-tuning-and-inference-for-computer-vision-with-yolo" 
        />
        {/* <BlogDetail 
           name="Dynamic Programming: recursion + caching" 
           details="Knapsack, edit distance, LIS and how to count states for runtime" 
           link="/blogs/algos/dp" 
        /> */}
        {/* <BlogDetail 
          name="That time I made the fastest SAM2 API" 
          details="Blog post about creating a high-performance SAM2 API" 
          link="/blogs/sam2" 
        /> */}

      </section>

      <section className="mb-8">
        <p className="mb-4"><strong>Projects: </strong></p>
        <ul className="list-disc list-inside">

          <ProjectDetail 
            name="usaco.moe" 
            details="Slick USACO results viewer"
            link="https://usaco.moe"
          />

          <ProjectDetail 
            name="Overeasy" 
            details="Zero-shot CV model orchestration framework"
            link="https://github.com/overeasy-sh/overeasy"
          />
          {/* Created a Python framework for orchestrating zero-shot computer vision models. 
              Enables building custom pipelines for object detection, classification, and 
              segmentation without training data. */}
          
          <ProjectDetail 
            name="Reddit-Embed" 
            details="Native Reddit thread embedder"
            link="https://github.com/AnirudhRahul/Reddit-Embed"
          />
          {/* Built a JavaScript plugin for natively embedding Reddit posts/comments onto any website. 
              No API key needed, client-side rendered, and easily customizable. */}
        </ul>
      </section>


    </main>
  );
}

function CourseDetail({ name, details }: { name: string; details: string }) {
  return (
    <li className='text-sm sm:text-base'>
      <span dangerouslySetInnerHTML={{ __html: name }} />
      <span dangerouslySetInnerHTML={{ __html: `<!-- ${details} -->` }} />
    </li>
  );
}

function BlogDetail({ name, details, link }: { name: string; details: string; link: string }) {
  return (
    <li className="mb-2">
      <span className="relative inline-block group">
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
          {name}
        </a>
        <span className="absolute left-0 md:left-full ml-0 md:ml-2 top-full md:top-0 mt-2 md:mt-0 w-64 p-2 text-sm text-white bg-black rounded hidden group-hover:block md:block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10 transform md:-translate-y-1/4">
          {details}
        </span>
        {/* Applied the same small/md CSS technique for the tooltip as in the first tooltip */}
      </span>
    </li>
  );
}

function ProjectDetail({ name, details, link }: { name: string; details: string; link: string }) {
  return (
    <li className="mb-2">
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
        {name}
      </a>
      <span className="text-[#6A9955]"> {`// ${details}`}</span>
    </li>
  );
}