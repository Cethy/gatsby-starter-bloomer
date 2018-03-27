import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Bulma & Bloomer" />
    <Hero isFullHeight isColor="primary">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>{children()}</HeroBody>

      <HeroFooter>
        <Container>
          <Tabs isAlign="centered">
            <TabList>
              <Tab>
                <TabLink>And this at the bottom</TabLink>
              </Tab>
            </TabList>
          </Tabs>
        </Container>
      </HeroFooter>
    </Hero>
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
