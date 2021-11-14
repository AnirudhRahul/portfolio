import {Container, List} from 'semantic-ui-react'
import Footer from '../components/Footer.js'
import Head from 'next/head';
import Link from 'next/link'
import styles from "./shaders.module.css"

export default function ProjectsPage(){
  return (
    <Container> 
      <Head>
        <meta name="description" content="Hey I'm Ani here are some of my open source projects you can check out!"></meta>
      </Head>

        <Container className="raised tight">
            
            <p>Hey there if you like the cool shaders in the background then you&apos;ve come to the right place!</p>

            <p>If you want just want to watch the sakura fall you can go <Link href="/bg">here</Link> </p>


            <p> If you&apos;re interested in learning more about these shaders or WebGL in general I&apos;d reccomend these resources:</p>

            <List bulleted >
                <List.Item>
                    <a href="http://learnwebgl.brown37.net/index.html">A great intro to WebGL from Brown</a>
                </List.Item>

                <List.Item>
                    <a href="https://github.com/AnirudhRahul/portfolio/blob/next-js/portfolio/public/shader/script.js">Source Code</a>
                </List.Item>

                <List.Item>
                    <a href="https://codepen.io/FrankFitzGerald/pen/LAbfm">Codepen example</a>
                </List.Item>
            </List>
        </Container>


      <Footer/>
    </Container>
  )
}
