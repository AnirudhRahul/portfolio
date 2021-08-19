import React from 'react'
import {Image, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import Footer from '../components/Footer.js'

export default () => (
  <Container text>
  <Image src="/headshot.jpg" size='medium' floated='right' circular className='headshot'/>
    <p>
      Hey there! I'm Anirudh, and I'm a 24' at MIT studying Electrical Engineering, Computer Science, and Math. 
    </p>

    <p>
      Currently I'm a member of the <a href="https://hackmit.org/">HackMIT</a> dev team, and I've been working on some of our <a href="https://code.hackmit.org/">apps</a>, including our new registration platform feather, our new mobile app, and spectacle our submission platform.
    </p>

    <p>
      One of the most interesting things I made this year was a smart contract puzzle for HackMIT's <a href="https://my.hackwsb.net/">admission puzzle</a>, where puzzlers need to solve a board game running as a solidity contract on the ETH blockchain.
    </p>

    <p>
      In highschool had lots of fun going to competitve programming contests all over Florida, and in my junior year I managed to qualify for USACO platinum, and me and <a href="/top_lads.png">my friends</a> even won some statewide contests!
    </p>

    <p>
      When I'm away from my PC, I enjoy cooking new recipes and catching up with friends over league.
    </p>
    <Footer/>
  </Container>
)


