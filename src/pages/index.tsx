import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Hero from 'components/Hero'
import About from 'components/About'
import Theme from 'components/Theme'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import LoadingScreen from 'components/LoadingScreen'
import { TITLE } from 'utility/constants'

function Home() {
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(prevValue => !prevValue)
    }, 2000)
  }, [])

  return (
    <Theme>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {isLoaded ? (
        <LoadingScreen />
      ) : (
        <>
          <Hero />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </Theme>
  )
}

export default Home
