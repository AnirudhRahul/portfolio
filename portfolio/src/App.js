import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import {Button, Menu, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="icon" href="favicon.ico" />
      {/* <nav>
        <Link to="/">Anirudh Rahul</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/graphs">Fun Stuff</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav> */}

      <Menu pointing secondary>
          <Menu.Item
            name='Anirudh Rahul'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item
              name='Projects'
              // active={activeItem === 'messages'}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Graphs'
              // active={activeItem === 'friends'}
              // onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Segment>



      <Button>Joe</Button>
      <div className="content">
        {/* <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense> */}
        Main content goes here this will be static
      
      </div>
    </Root>
  )
}

export default App
