import React from 'react'
import {
  AboutContainer,
  AboutH2,
  AboutDescription,
  TechnologiesH2,
  TechnologiesContainer,
} from 'components/About/About.style'
import { ABOUT_DESC } from 'utility/constants'
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
  return (
    <AboutContainer>
      <AboutH2>O mnie</AboutH2>
      <AboutDescription>
        {ABOUT_DESC.map(item => (
          <p key={item}>{item}</p>
        ))}
      </AboutDescription>
      <TechnologiesH2>Technologie</TechnologiesH2>
      <TechnologiesContainer>
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
    </AboutContainer>
  )
}

export default About
