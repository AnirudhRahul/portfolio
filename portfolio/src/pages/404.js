import React from 'react'
import {Image, Container} from 'semantic-ui-react'
import Footer from '../components/Footer.js'

export default () => (
  <Container className="very padded">
    <h1>Oh no! We couldn't find that page :(</h1>
    <Image src="/404image.jpeg" size='medium'  centered/>
    <Footer/>
  </Container>
)
