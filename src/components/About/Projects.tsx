import React from 'react'
import { useReposData } from 'hooks/useReposData'
import { PORTFOLIO_TAG } from 'utility/constants'
import { ProjectContainer } from 'components/About/About.style'

interface ProjectsProperties {
  name: string
  url: string
  description: string
  createdAt: string
  repositoryTopics: {
    nodes: [
      {
        topic: {
          name: string
        }
      }
    ]
  }
}

function Projects() {
  const { nodes } = useReposData()

  const filteredProjects = () => {
    const projects: Array<ProjectsProperties> = []
    nodes.forEach(project => {
      project.repositoryTopics.nodes.forEach(item => {
        if (item.topic.name.includes(PORTFOLIO_TAG)) {
          projects.push(project)
        }
      })
    })
    return projects
  }

  return (
    <ProjectContainer>
      {filteredProjects().map(project => (
        <a href={project.url} target="_blank" key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <span>{project.createdAt.slice(0, 4)}</span>
        </a>
      ))}
    </ProjectContainer>
  )
}

export default Projects
