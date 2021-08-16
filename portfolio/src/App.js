import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import {Image, Container, Menu, Segment, Header} from 'semantic-ui-react'
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
                link="google.com"
              />
            </Menu.Menu>
        </Menu>

    
            <Container class="very padded">
            <Image src="/headshot.jpg" size='medium' floated='right' circular />
              <p>
                Hey there! I'm Anirudh, and I'm a 24' at MIT studying Electrical Engineering, Computer Science, and Math. 
              </p>

              <p>
                Currently I'm a member of the Hackmit dev team, so I've been busy contributing to our projects you can find on techX.
                One of the most exciting tasks I worked on was on making a puzzle, where I decided to learn some Solidity and make a next gen decentralized puzzle.
              </p>

              <p>
                In highschool, I participated in a lots computer science contests(and I was not very good at first 😂). But in my junior year I managed to qualify for USACO platinum, and me and <a href="/top_lads.png">my friends</a> even won some statewide contests in Florida!
              </p>

              <p>
                When I'm away from the pc I enjoy walking around to explore and hopefully find some cool new places to eat.
                And if I need a break at the pc, I'll usually get on a game of league.
              </p>



            

            </Container>


      </Container>

    </Root>
  )
}

export default App
