import {Container} from 'semantic-ui-react'
import Project from '../components/Project.js'
import Footer from '../components/Footer.js'
import Head from 'next/head';
import opsuImg from "../public/opsuImg_small.png"
import redditEmbedImg from "../public/redditEmbed.png"
import puzzleImg from "../public/puzzle.png"
import aniServeImg from "../public/aniserve.png"
export default function ProjectsPage(){
  return (
    <Container textAlign='center'> 
      <Head>
        <meta name="description" content="Hey I'm Ani here are some of my open source projects you can check out!"></meta>
      </Head>
      <h1>Projects</h1>
      Here are some of my open source projects you can check out!
  
      <Project 
        title="Opsu!"
        img={opsuImg}
        desc="Primary maintainer for the android game Opsu! Used AWS Lambda and DynamoDB to make a scalable global leaderboard and auth solution for over 100k users"
        githubLink="https://github.com/AnirudhRahul/opsu-Android"
        playLink="https://play.google.com/store/apps/details?id=fluddokt.opsu.android&hl=en_US&gl=US" 
        skills={["Java", "Android", "DynamoDB", "Lambda", "Node.js"]}/>
  
      <Project 
        title="Reddit Embed"
        img={redditEmbedImg}
        desc="Developed a frontend javascript library to embed full reddit posts, including comments, on other sites"
        githubLink="https://github.com/AnirudhRahul/Reddit-Embed"
        link="https://anirudhrahul.github.io/Reddit-Embed/" 
        skills={["Javascript", "CSS", "Reversing"]}/>
  
      <Project 
        title="HackMIT Puzzle"
        img={puzzleImg}
        desc="Made a algorithmn based minigame smart contract, for HackMIT 2021's final puzzle"

        link="https://chadtomoon.hackwsb.net"
        ethLink="https://ropsten.etherscan.io/address/0x5fae83fFc4e3853a5E5a2AA7392f6E936a7b6AB1"
        skills={["Solidity", "Node.js", "Redis" ]}/>
  
      <Project 
        title="Media Server"
        img={aniServeImg} 
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
}
