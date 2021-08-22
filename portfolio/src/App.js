import React, { Suspense, useState } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import {Container, Divider, Icon, IconGroup, Menu, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Background from './components/Background.js'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Background></Background>
      <Container text className="centered">

      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item
            id = "me"
            name='Anirudh Rahul'
          />
        </Link>

        <Menu.Menu position='right'>
        <Link to="/projects">
          <Menu.Item
            name='Projects'
            />
        </Link>
        <Link to="/graphs">
          <Menu.Item
              name='Graphs'
            />
        </Link>

        </Menu.Menu>
      </Menu>


      <Suspense fallback="loading">
        <Routes/>
      </Suspense>

      </Container>
    </Root>
  )
}

export default App
