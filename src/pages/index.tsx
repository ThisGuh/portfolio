import React from 'react'
import Hero from 'components/Hero'
import About from 'components/About'
import Theme from 'components/Theme'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

function Home() {
  return (
    <Theme>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </Theme>
  )
}

export default Home
