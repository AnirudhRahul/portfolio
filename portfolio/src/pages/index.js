import React from 'react'
import {Image, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import Footer from '../components/Footer.js'

export default () => (
  <Container>
    <Container text id="bio" className={process.browser && document.getElementById("bg-button").firstChild && window.getComputedStyle(document.getElementById("bg-button")).opacity==1?"raised":""}>
    <Image src="/headshot.jpg" size='medium' floated='right' circular className='headshot'/>
      <p>
        Hey there! I'm Anirudh, and I'm a 24' at MIT studying Computer Science and Math. 
      </p>

      <p>
        Currently, I'm a member of the <a href="https://hackmit.org/">HackMIT</a> dev team, and I've been working on some of our <a href="https://code.hackmit.org/">apps</a>, including our new registration platform <a href="https://my.hackmit.org/">feather</a> and our submission platform, <a href="https://spectacle.hackmit.org/">spectacle</a>.
      </p>

      <p>
        One of the cooler things I picked up this year was writing smart contracts for the ETH blockchain. <br/>I also ended up making a smart contract puzzle for HackMIT's annual <a href="https://my.hackwsb.net/">admissions puzzle</a>, where puzzlers have to solve a NP-hard minigame running on the blockchain.
      </p>

      <p>
        And I'm excited to keep picking up new stuff because that's what keeps programming fun!
      </p>

      <p>
        Throughout high school, I had a lot of fun going to competitive programming contests in Florida. <br/> In junior year I qualified for USACO platinum, and <a href="/top_lads.png">my team</a> even won some statewide contests!
      </p>

      <p>
        When I'm away from my PC, I enjoy cooking new recipes and catching up with friends over League.
      </p>
    </Container>
    <Footer/>
  </Container>

)


