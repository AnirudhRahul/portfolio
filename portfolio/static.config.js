import path from 'path'
import axios from 'axios'
import React from 'react'

const gh_stats = require('./githubStats.js')

export default {
  siteRoot: 'https://anirudhrahul.com',

  getRoutes: async () => {
    // const { data: posts } = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )
    const github_data = await gh_stats.getDiffsByDay(false)

    return [{
      path: '/graphs',
      getData: () => ({big_list: github_data}),
    }
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
      <meta charSet="UTF-8" />
      <title>Anirudh Rahul | Web Dev</title>
      <meta name="description" content="Hey I'm Ani a 24' at MIT who loves CS and is dev head at HackMIT!"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet"/>
      <script src="/shader/script.js" defer></script>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}

