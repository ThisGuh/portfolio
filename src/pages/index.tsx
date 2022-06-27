import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from 'components/Hero'
import About from 'components/About'
import Theme from 'components/Theme'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import { TITLE } from 'utility/constants'

function Home() {
  return (
    <Theme>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </Theme>
  )
}

export default Home
