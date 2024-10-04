'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import Link from 'next/link';

gsap.registerPlugin(ScrambleTextPlugin);

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.to(titleRef.current, {
        delay: 6, // Add a delay of 1 second before starting the animation
        duration: 2, // Increase the duration to make the motion longer
        scrambleText: { text: "Hi, I'm Ani", chars: "01", revealDelay: 0.5 },
        ease: "power2.inOut", // Use a smoother easing function
      });

      gsap.to(subtitleRef.current, {
        delay: 6, // Add a delay of 1 second before starting the animation
        duration: 2, // Increase the duration to make the motion longer
        scrambleText: { text: "I like to code :)", chars: "01", revealDelay: 0.5  },
        ease: "power2.inOut", // Use a smoother easing function
      });
    }
  }, []);

  return (
    <div className="min-h-screen font-mono text-black bg-white">
      <main className="max-w-[1010px] p-8 mx-auto lg:text-lg lg:p-20 text-base">
        <h1 ref={titleRef} className="text-4xl mb font-bold">Anirudh Rahul</h1>
        <p ref={subtitleRef} className="text-xl mb-6 font-light">MIT EECS grad</p>
        
        {/* <nav className="mb-12">
          <ul className="list-none space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link href="/projects" className="text-blue-600 hover:underline">Projects</Link></li>
            <li><Link href="/experience" className="text-blue-600 hover:underline">Experience</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
          </ul>
        </nav> */}

        <section className="mb-8  ">
          {/* <h2 className="text-2xl mb-4 font-semibold">About Me</h2> */}

          <p className="mb-4">Here's a little bit about myself:</p>
          <p className="mb-4">In high school, I enjoyed math and CS contests. I qualified for USACO platinum and won statewide competitions with <a href="/top_lads.png" target="_blank" className="text-blue-600 hover:underline">my team</a>. I also developed android apps on the side.</p> 
          <p className="mb-4">I joined HackMIT as a dev head, I gained experience with deployment/infra and working on fullstack apps.</p>
          <p className="mb-4">I interned at Jane Street, focusing on caching tick data and S-expression deduplication.</p>

          {/* <p className="mb-4"><strong>Fun Fact:</strong> In 2022, I placed 6th at the <a href="https://math.mit.edu/~yyao1/integrationbee.html" target="_blank" className="text-blue-600 hover:underline">MIT Integration Bee</a>.</p> */}
          {/* <p>Notable achievements:</p>
          <ul className="list-disc list-inside mb-4">
            <li>USACO Platinum qualifier</li>
            <li>6th place in MIT Integration Bee</li>
            <li>Dev head at HackMIT</li>
          </ul> */}
          
          <p> </p>

        </section>

        {/* <section className="mb-12">
          <h2 className="text-2xl mb-4 font-semibold">HackMIT Experience</h2>
        </section> */}

        <section className="mb-8">
          {/* <h2 className="text-2xl mb-4 font-semibold">Fav classes:</h2> */}
          <p className="mb-4"><strong>Fav classes: </strong>Classes I enjoyed the most at MIT.</p>
          <ul className="list-disc list-inside">
          <CourseDetail name={"6.869&nbsp;&nbsp;Advances In Computer Vision"} details="Studied traditional CV techniques like GANs - Created an anime style transfer model" />
          <CourseDetail name={"6.815&nbsp;&nbsp;Computational Photography"} details="Delved into traditional image processing - Built a panoramic image stitcher" />
          <CourseDetail name={"6.S898&nbsp;Deep Learning"} details="Studied contrastive learning under Phillip Isola" />
          <CourseDetail name={"6.046&nbsp;&nbsp;Advanced Algorithms"} details="Learned about linear programming which is a really useful technique, that I then used in my next internship lol." />
          <CourseDetail name={"6.824&nbsp;&nbsp;Distributed Systems"} details="Learned about Paxos, Raft, and other distributed systems things." />
          <CourseDetail name={"6.864&nbsp;&nbsp;Natural Language Processing"} details="Explored BERT before the rise of GPTs - Developed a BERT model to generate song lyrics by scraping data from genius.com" />
          <CourseDetail name={"6.945&nbsp;&nbsp;Large Scale Symbolic Systems"} details="Focused on functional programming - Developed a compiler" />
          </ul>
        </section>


        <section className="mb-8">
          <p className="mb-4"><strong>Tech Blogs: </strong></p>
          
          <BlogDetail 
            name="Finetuning YOLO models on modal" 
            details="Very randomly had some code I wrote turned into an example blog on modal" 
            link="https://modal.com/docs/examples/finetune_yolo#fine-tuning-and-inference-for-computer-vision-with-yolo" 
          />
          (More coming soon)
        </section>

        {/* <section className="mb-8">
          <p className="mb-4"><strong>Blogs: </strong>(More coming soon)</p>
          
          <BlogDetail 
            name="Classes are not classes" 
            details="Classes are largely what you make of them whether at MIT or anywhere else."
            link="https://medium.com/@anirudh.rahul/classes-are-not-classes-997380b3b22f" 
          />
        </section> */}



      </main>


      <p className="text-lg my-8 whitespace-nowrap overflow-hidden">
          {'(ᵔᴥᵔ)'.repeat(1000)}
          {/* 'ᕙ(⇀‸↼‶)ᕗ'
          '( ⚆ _ ⚆ )'
          '(⌐□_□)'
          '(ᵔᴥᵔ)' */}
        </p>

        <footer className="text-center text-sm mt-2 pb-4">
          <a href="https://github.com/AnirudhRahul" className="text-blue-600 hover:underline mr-4">GitHub</a>
          <a href="https://www.linkedin.com/in/anirudh-rahul-34a2bb195" className="text-blue-600 hover:underline mr-4">LinkedIn</a>
          <a href="https://x.com/Ani_da_dev" className="text-blue-600 hover:underline">Twitter</a>
          <p className="mt-4"><em>All truly strong people are kind.</em></p>
          {/* <p className="mt-4">Made with ❤️ by Anirudh Rahul</p> */}
        </footer>

    </div>
  );
}

function CourseDetail({ name, details }: { name: string; details: string }) {
  return (
    <li>
      <span dangerouslySetInnerHTML={{ __html: name }} />
      <span dangerouslySetInnerHTML={{ __html: `<!-- ${details} -->` }} />
    </li>
  );
}

function BlogDetail({ name, details, link }: { name: string; details: string; link: string }) {
  return (
    <li className="relative group mb-2">
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
        {name}
      </a>
      <span className="absolute left-0 top-full mt-2 w-64 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {details}
      </span>
    </li>
  );
}