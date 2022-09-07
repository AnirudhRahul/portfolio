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
            I was a dev head at <a href="https://hackmit.org/">HackMIT</a>, and I&apos;ve been working on some of our <a href="https://code.hackmit.org/">apps</a>, including our new registration platform <a href="https://my.hackmit.org/">feather</a> and our submission platform, <a href="https://spectacle.hackmit.org/">spectacle</a>.
          </p>

          
          

          <p>
            And I&apos;m excited to keep picking up new stuff because that&apos;s what keeps programming fun!
          </p>

          <p>
            Throughout high school, I had a lot of fun going to competitive programming contests in Florida. <br/> In junior year I qualified for USACO platinum, and <a href="/top_lads.png">my team</a> even won some statewide contests!
          </p>

          <p>
            Away from work, I enjoy cooking new recipes and playing strategic games like Qatan or League of Legends.
          </p>
      </Container>
      <Footer></Footer>
    </Container>


    </div>
  )
}
