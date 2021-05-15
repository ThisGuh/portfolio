import React from 'react'
import Hero from 'components/Hero'
import About from 'components/About'
import Theme from 'components/Theme'

function Home() {
  return (
    <Theme>
      <Hero />
      <About />
    </Theme>
  )
}

export default Home
