import Head from 'next/head'
// import Image from 'next/image'
import { useState, useEffect } from 'react'
import {Image, Container} from 'semantic-ui-react'
import Footer from '../components/Footer'
import HeadShot from '../public/optimized-headshot.jpeg'

import NextImage from 'next/image'

export default function Home() {
  const [raised, setRaised] = useState(false);



  useEffect(() => {
    setRaised(true)
  }, []);

  return (
    <div>
      <Head>
        <meta name="description" content="Hey I'm Ani a junior at MIT who loves working on quantative problems"></meta>
      </Head>

      <Container>
        <Container text id="bio" className={raised ? "raised" : "no-transition"}>
        <Image size='medium' floated='right' alt='Anirudh Rahul' circular centered className='headshot'>
          <NextImage src={HeadShot}/>
        </Image>

          <p>
            Hey there! I&apos;m Anirudh, and I&apos;m a senior studying Computer Science and Math at MIT. 
          </p>

          <p>
          Some fun classes I've taken at MIT include: 
            <ul>
              <li>6.864 Natural Language Processing</li>
              <li>6.869 Advances In Computer Vision</li>
              <li>6.815 Computational Photography</li>
              <li>6.945 Large Scale Symbolic Systems</li>
              <li>CMS.636 Extending the Museum</li>
              <li>6.824 Distributed Systems</li>

            </ul>
          </p>

          <p>
            Last summer I interned as a software engineer at Janestreet, and worked on exciting things like caching tick data and sexp deduplication.
          </p>

          {/* <p>I&apos;m currently interested in working on difficult quantative problems, where I can apply my knowledge of math, computer science, and machine learning.</p> */}

          <p>
            Throughout high school I always enjoyed going to math and computer science contests with my friends. In junior year I qualified for USACO platinum, and <a href="/top_lads.png" target="_blank">my team</a> even won some statewide CS contests.
            I also participated in the 2022 <a href="https://math.mit.edu/~yyao1/integrationbee.html">MIT Integration Bee</a> where I got 6th place!
          </p>

          <p>
            I was also a dev head at <a href="https://hackmit.org/">HackMIT</a>, and I have experience developing and deploying many of our apps such as our registration platform <a href="https://my.hackmit.org/">feather</a> and our submission platform <a href="https://spectacle.hackmit.org/">spectacle</a>.
          </p>

          
          


      </Container>
      <Footer></Footer>
    </Container>


    </div>
  )
}
