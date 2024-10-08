import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'
import '../styles/index.css'

import {Container, Menu} from 'semantic-ui-react'
import Head from 'next/head'
import Link from 'next/link'
import Background from '../components/Background'


function MyApp({ Component, pageProps }) {
  if(Component.displayName==="BackgroundPage"){
    return <div>
      <Head>
        <title>Anirudh Rahul | Web Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet"/>
        <script src="/shader/script.js" async></script>
      </Head>
      <Component {...pageProps} />
    </div>
  }

  return <Container text className="centered">
    <Head>
        <title>Anirudh Rahul | Web Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet"/>
        <script src="/shader/script.js" defer></script>
      </Head>
      <Background/>
      <Menu pointing secondary className='title'>
        <Link href="/" passHref>
          <Menu.Item
            id = "me"
            name='Anirudh Rahul'
          />
        </Link>
          

        <Menu.Menu position='right'>
          <Link href="/projects" passHref>
            <Menu.Item
              name='Projects'
              />
          </Link>

          <Link href="/graphs" passHref>
            <Menu.Item
                name='Graphs'
              />
          </Link>

          <Link href="/shaders" passHref>
            <Menu.Item
                name='Shaders!'
              />
          </Link>

        </Menu.Menu>

      </Menu>

    <Component {...pageProps} />

  </Container>
}



export default MyApp
