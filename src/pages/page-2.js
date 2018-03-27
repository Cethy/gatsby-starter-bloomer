import React from 'react'
import Link from 'gatsby-link'
import { Container, Title } from 'bloomer'

const SecondPage = () => (
  <Container hasTextAlign="centered">
    <Title isSize="3">Hi from the second page</Title>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default SecondPage
