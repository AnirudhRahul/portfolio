import React from 'react'
import {Image, Container} from 'semantic-ui-react'
import Footer from '../components/Footer.js'

export default function MissingPage(){
  return (
  <Container className="very padded">
    <h1>Oh no! We couldn&apos;t find that page :(</h1>
    <Image src="/404image.jpeg" alt="" size="medium" centered/>
    <Footer/>
  </Container>
)}
