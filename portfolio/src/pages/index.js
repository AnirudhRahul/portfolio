import React from 'react'
import {Image, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default () => (
  <Container class="very padded">
  <Image src="/headshot.jpg" size='medium' floated='right' circular />
    <p>
      Hey there! I'm Anirudh, and I'm a 24' at MIT studying Electrical Engineering, Computer Science, and Math. 
    </p>

    <p>
      Currently I'm a member of the <a href="https://hackmit.org/">HackMIT</a> dev team, and I've been working on maintaing our suite of <a href="https://www.notion.so/Join-HackMIT-Dev-8484e088859640e0a0b5af1a4ddbec4d">apps</a>, and our <a href="my.hackwsb.net">admissions puzzle.</a>
    </p>

    <p>
      One of the most interesting things I learned this year was how to make smart contracts on ETH with solidity(DeFi ftw). And I even made a cool puzzle for hack!
    </p>

    <p>
      I went to lots of computer science contests in highschool, and in my junior year I managed to qualify for USACO platinum, and me and <a href="/top_lads.png">my friends</a> even won some statewide contests in Florida!
    </p>

    <p>
      When I'm away from my PC, I enjoy cooking new recipes and catching up with friends over league.
    </p>
  </Container>
)


