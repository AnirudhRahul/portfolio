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
            Hey there! I&apos;m Anirudh, and I&apos;m a junior studying Computer Science and Math at MIT. 
          </p>

          <p>
          Some of my recent coursework includes: 
            <ul>
              <li>6.864 Natural Language Processing</li>
              <li>6.869 Advances In Computer Vision</li>
              <li>6.815 Computational Photography</li>
              <li>6.945 Large Scale Symbolic Systems</li>
            </ul>
          </p>

          <p>
            This summer I interned as a backend engineer at Bytedance on the Lark Innovation team. I got to work on large scale Go backend, interface with systems such as Kubernetes and RabbitMQ, and apply my knowledge of machine learning by using a BERT model to create tags for message threads.
          </p>

          <p>I&apos;m currently interested in working on difficult quantative problems, where I can apply my knowledge of math, computer science, and machine learning.</p>

          <p>
            Throughout high school I always enjoyed going to math and computer science contests with my friends. In junior year I qualified for USACO platinum, and <a href="/top_lads.png" target="_blank">my team</a> even won some statewide CS contests.
            I also participated in this years <a href="https://math.mit.edu/~yyao1/integrationbee.html">MIT Integration Bee</a> where I got 6th place!
          </p>

          <p>
            Last year I was a dev head at <a href="https://hackmit.org/">HackMIT</a>, and I have experience developing and deploying many of our apps such as our registration platform <a href="https://my.hackmit.org/">feather</a> and our submission platform <a href="https://spectacle.hackmit.org/">spectacle</a>.
          </p>

          
          

          {/* <p>
            And I&apos;m excited to keep picking up new stuff because that&apos;s what keeps programming fun!
          </p> */}

         

          <p>
            Away from work, I enjoy cooking and playing strategic games like Qatan or League of Legends.
          </p>
      </Container>
      <Footer></Footer>
    </Container>


    </div>
  )
}
