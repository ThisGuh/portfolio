import React from 'react'
import {
  AboutContainer,
  AboutH2,
  AboutDescription,
  TechnologiesContainer,
  ProjectsContainer,
} from 'components/About/About.style'
import { ABOUT_DESC, PORTFOLIO_TAG } from 'utility/constants'
import { useReposData } from 'hooks'
import CSSIcon from 'icons/css3.svg'
import HTMLIcon from 'icons/html5.svg'
import JSIcon from 'icons/javascript.svg'
import TSIcon from 'icons/typescript.svg'
import ReactIcon from 'icons/react-js.svg'
import GatsbyIcon from 'icons/gatsby.svg'
import SassIcon from 'icons/sass.svg'
import StyledComponentsIcon from 'icons/styled-components.svg'
import GitIcon from 'icons/git.svg'

function Project() {
  const { nodes } = useReposData()
  const projects: Array<Object> = []
  nodes.forEach(project => {
    project.repositoryTopics.nodes.forEach(item => {
      if (item.topic.name.includes(PORTFOLIO_TAG)) {
        projects.push(project)
      }
    })
  })
}

function About() {
  return (
    <AboutContainer>
      <AboutH2>O mnie</AboutH2>
      <AboutDescription>
        {ABOUT_DESC.map(item => (
          <p key={item}>{item}</p>
        ))}
      </AboutDescription>
      <AboutH2>Technologie</AboutH2>
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
      <AboutH2>Projekty</AboutH2>
      <ProjectsContainer></ProjectsContainer>
    </AboutContainer>
  )
}

export default About
