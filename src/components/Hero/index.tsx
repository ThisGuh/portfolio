import React, { useEffect, useState } from 'react'
import { window } from 'browser-monads-ts'
import { Link } from 'react-scroll'
import {
  HeroContainer,
  HeroHeader,
  HeroH1,
  HeroDesc,
  HeroCircle,
  HeroIconContainer,
  HeroNav,
  HeroNavList,
  HeroNavListItem,
} from 'components/Hero/Hero.style'
import Button from 'components/Button'
import {
  HERO_H1_CONTENT,
  HERO_DESC,
  HERO_BUTTON_CONTENT,
  HERO_NAV_CONTENT,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from 'utility/constants'
import GithubIcon from 'icons/github.svg'
import LinkedinIcon from 'icons/linkedin.svg'

function Hero() {
  const [heroHeight, setHeroHeight] = useState(0)

  useEffect(() => {
    const updateHeroHeight = () => {
      setHeroHeight(window.innerHeight)
    }
    updateHeroHeight()
    window.addEventListener('resize', updateHeroHeight)

    return () => window.removeEventListener('resize', updateHeroHeight)
  }, [])

  return (
    <HeroContainer style={{ height: heroHeight }}>
      <HeroHeader>
        <HeroH1>{HERO_H1_CONTENT}</HeroH1>
        <HeroDesc>{HERO_DESC}</HeroDesc>
        <Link to="Kontakt" spy smooth>
          <Button text={HERO_BUTTON_CONTENT} />
        </Link>
      </HeroHeader>
      <HeroNav>
        <HeroNavList>
          {HERO_NAV_CONTENT.map(item => (
            <Link to={item} key={item} spy smooth>
              <HeroNavListItem>{item}</HeroNavListItem>
            </Link>
          ))}
        </HeroNavList>
      </HeroNav>
      <HeroCircle />
      <HeroIconContainer>
        <a href={GITHUB_LINK} target="_blank">
          <GithubIcon />
        </a>
        <a href={LINKEDIN_LINK} target="_blank">
          <LinkedinIcon />
        </a>
      </HeroIconContainer>
    </HeroContainer>
  )
}

export default Hero
