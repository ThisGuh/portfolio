import React, { useRef } from 'react'
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
import { useCircleAnimation } from 'hooks/useCircleAnimation'
import { useHeroHeight } from 'hooks/useHeroHeight'
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
  const heroHeight = useHeroHeight()
  const HeroCircleRef = useRef(null)
  useCircleAnimation(HeroCircleRef)

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
      <HeroCircle ref={HeroCircleRef} />
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
