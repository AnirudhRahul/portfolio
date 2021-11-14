import Head from 'next/head'
// import Image from 'next/image'
import {Image, Container} from 'semantic-ui-react'
import Footer from '../components/Footer'
import HeadShot from '../public/optimized-headshot.jpeg'

import NextImage from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Hey I'm Ani a 24 at MIT who loves CS and is dev head at HackMIT!"></meta>
      </Head>

      <Container>
        <Container text id="bio" className="">
        <Image size='medium' floated='right' alt='Anirudh Rahul' circular className='headshot'>
          <NextImage src={HeadShot}/>
        </Image>
          <p>
            Hey there! I&apos;m Anirudh, and I&apos;m a &apos;24 at MIT studying Computer Science and Math. 
          </p>

          <p>
            Currently, I&apos;m a Dev head at <a href="https://hackmit.org/">HackMIT</a>, and I&apos;ve been working on some of our <a href="https://code.hackmit.org/">apps</a>, including our new registration platform <a href="https://my.hackmit.org/">feather</a> and our submission platform, <a href="https://spectacle.hackmit.org/">spectacle</a>.
          </p>

          <p>
            One of the cooler things I picked up this year was writing smart contracts for the ETH blockchain, which I used to make a puzzle for Hack this year!
          </p>

          <p>
            And I&apos;m excited to keep picking up new stuff because that&apos;s what keeps programming fun!
          </p>

          <p>
            Throughout high school, I had a lot of fun going to competitive programming contests in Florida. <br/> In junior year I qualified for USACO platinum, and <a href="/top_lads.png">my team</a> even won some statewide contests!
          </p>

          <p>
            Away from work, I enjoy cooking new recipes and catching up with friends over League.
          </p>
      </Container>
      <Footer></Footer>
    </Container>


    </div>
  )
}
