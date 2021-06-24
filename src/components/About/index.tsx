import React, { useRef } from 'react'
import {
  AboutContainer,
  AboutH2,
  AboutDescription,
  TechnologiesContainer,
  ProjectsContainer,
} from 'components/About/About.style'
import Projects from 'components/About/Projects'
import { ABOUT_DESC } from 'utility/constants'
import { useIconsAnimation } from 'hooks/useIconsAnimation'
import CSSIcon from 'icons/css3.svg'
import HTMLIcon from 'icons/html5.svg'
import JSIcon from 'icons/javascript.svg'
import TSIcon from 'icons/typescript.svg'
import ReactIcon from 'icons/react-js.svg'
import GatsbyIcon from 'icons/gatsby.svg'
import SassIcon from 'icons/sass.svg'
import StyledComponentsIcon from 'icons/styled-components.svg'
import GitIcon from 'icons/git.svg'

function About() {
  const IconsRef = useRef(null)
  useIconsAnimation(IconsRef)

  return (
    <AboutContainer id="O mnie">
      <AboutH2>O mnie</AboutH2>
      <AboutDescription>
        {ABOUT_DESC.map(item => (
          <p key={item}>{item}</p>
        ))}
      </AboutDescription>
      <AboutH2>Technologie</AboutH2>
      <TechnologiesContainer ref={IconsRef}>
        <HTMLIcon />
        <CSSIcon />
        <JSIcon />
        <TSIcon />
        <ReactIcon />
        <GatsbyIcon />
        <SassIcon />
        <StyledComponentsIcon />
        <GitIcon />
      </TechnologiesContainer>
      <AboutH2 id="Projekty">Projekty</AboutH2>
      <ProjectsContainer>
        <Projects />
      </ProjectsContainer>
    </AboutContainer>
  )
}

export default About
