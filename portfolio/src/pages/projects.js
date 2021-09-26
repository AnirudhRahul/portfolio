import React from 'react'
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Project from '../components/Project.js'
import './projects.css'

import Footer from '../components/Footer.js'

export default () => (
  <Container textAlign='center'> 
    <h1>Projects</h1>
    Here are some of my open source projects you can check out!

    <Project 
      title="Opsu!"
      img="/opsuImg.png" 
      desc="Primary maintainer for the android game Opsu! Used AWS Lambda and DynamoDB to make a scalable global leaderboard and auth solution for over 100k users"
      githubLink="https://github.com/AnirudhRahul/opsu-Android"
      playLink="https://play.google.com/store/apps/details?id=fluddokt.opsu.android&hl=en_US&gl=US" 
      skills={["Java", "Android", "DynamoDB", "Lambda", "Node.js"]}/>

    <Project 
      title="Reddit Embed"
      img="https://raw.githubusercontent.com/AnirudhRahul/Reddit-Embed/master/preview.png" 
      desc="Developed a frontend javascript library to embed full reddit posts, including comments, on other sites"
      githubLink="https://github.com/AnirudhRahul/Reddit-Embed"
      link="https://anirudhrahul.github.io/Reddit-Embed/" 
      skills={["Javascript", "CSS", "Reversing"]}/>



    <Project 
      title="HackMIT Puzzle"
      img="/puzzle.png"
      desc="Made the final HackMIT 2021 puzzle, where puzzlers have to solve a minigame running on a smart contract"
      link="https://chadtomoon.hackwsb.net"
      ethLink="https://ropsten.etherscan.io/address/0x5fae83fFc4e3853a5E5a2AA7392f6E936a7b6AB1"
      skills={["Solidity", "Node.js", "Redis" ]}/>

    <Project 
      title="Media Server"
      img="/aniserve.png" 
      desc="Developed and deployed a media server, which can automatically torrent new content and upload it to an S3 bucket, in addition to automatically creating thumbnails and titles"
      githubLink="https://github.com/AnirudhRahul/Anime-Server"
      link="https://aniserveani.com" 
      skills={["Node.js", "S3", "Nginx", "CentOS"]}/>

    <Project 
      title="IntroMark"
      desc="Created a C++ script that uses audio hashing and suffix arrays(to find repeating substrings) in order to find intros/endings for tv shows"
      githubLink="https://github.com/AnirudhRahul/IntroMark"
      skills={["C++", "Suffix Arrays"]}/>

    <Project 
      title="Student Delegates Website"
      desc="Designed graphics and layout for the FAMAT Student Delegates website"
      link="http://www.famatdelegates.org/"
      skills={["Wordpress"]}/>

    <Project
      title="Famat Bubbler"
      desc="Created a javascript program to automatically generate a pdf of scantrons, with IDs and names filled in for students."
      githubLink="https://github.com/AnirudhRahul/FAMATBubbler"
      skills={["Javascript"]}/>

    
    <Footer/>
  </Container>
)
