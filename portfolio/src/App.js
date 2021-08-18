import React, { Suspense } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import {Container, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Container centered text>
      <Menu pointing secondary>
        <Menu.Item
          id = "me"
          name='Anirudh Rahul'
          onClick={()=>{location.href="/"}}
        />

        <Menu.Menu position='right'>
          <Menu.Item
            name='Projects'
            // active={activeItem === 'messages'}
            onClick={()=>{location.href="/projects"}}
            />
          <Menu.Item
            name='Graphs'
            // active={activeItem === 'friends'}
            onClick={()=>{location.href="/graphs"}}
          />
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
