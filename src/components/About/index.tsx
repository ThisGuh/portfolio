import React from 'react'
import {
  AboutContainer,
  AboutSectionContainer,
  AboutH2,
  AboutDescription,
  TechnologiesContainer,
  TechnologyContainer,
  ProjectsContainer,
} from 'components/About/About.style'
import Projects from 'components/About/Projects'
import { ABOUT_DESC } from 'utility/constants'
import { TECHNOLOGIES } from 'utility/constants/technologies'

function About() {
  console.log(TECHNOLOGIES[0].icon)
  return (
    <AboutContainer id="O mnie">
      <AboutSectionContainer>
        <AboutH2>O mnie</AboutH2>
        <AboutDescription>
          {ABOUT_DESC.map(item => (
            <p key={item}>{item}</p>
          ))}
        </AboutDescription>
      </AboutSectionContainer>
      <AboutSectionContainer>
        <AboutH2>Technologie</AboutH2>
        <TechnologiesContainer>
          {TECHNOLOGIES.map(({ name, icon }) => (
            <TechnologyContainer key={name}>
              {icon()}
              <p>{name}</p>
            </TechnologyContainer>
          ))}
        </TechnologiesContainer>
      </AboutSectionContainer>
      <AboutSectionContainer>
        <AboutH2 id="Projekty">Projekty</AboutH2>
        <ProjectsContainer>
          <Projects />
        </ProjectsContainer>
      </AboutSectionContainer>
    </AboutContainer>
  )
}

export default About
