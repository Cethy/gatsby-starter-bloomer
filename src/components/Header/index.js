import React from 'react'
import Link from 'gatsby-link'
import { Container, Tabs, TabList, Tab, TabLink } from 'bloomer'

const AppHeader = () => (
  <Container>
    <Tabs isAlign="centered">
      <TabList>
        <Tab>
          <TabLink>This is always at the top</TabLink>
        </Tab>
        <Tab>
          <Link to="/">Home</Link>
        </Tab>
        <Tab>
          <Link to="/page-2/">Go to page 2</Link>
        </Tab>
      </TabList>
    </Tabs>
  </Container>
)

export default AppHeader
