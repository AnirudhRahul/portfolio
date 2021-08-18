import React from 'react'
import {Image, Container} from 'semantic-ui-react'

export default () => (
  <Container class="very padded">
    <h1>Oh no! We couldn't find that page :(</h1>
    <Image src="/404image.jpeg" size='medium'  centered/> 
  </Container>
)
