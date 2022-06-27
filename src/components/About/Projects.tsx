import React from 'react'
import { useReposData } from 'hooks/useReposData'
import { PORTFOLIO_TAG } from 'utility/constants'
import { ProjectContainer } from 'components/About/About.style'
import GithubIcon from 'icons/github.svg'
import EyeIcon from 'icons/eye.svg'

interface ProjectsProperties {
  name: string
  url: string
  description: string
  homepageUrl: string
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
    <>
      {filteredProjects().map(
        ({ name, url, description, createdAt, homepageUrl }) => (
          <ProjectContainer key={name}>
            <h1>{name}</h1>
            <p>{description}</p>
            <span>{createdAt.slice(0, 4)}</span>
            <section>
              <a href={url} rel="noreferrer" target="_blank">
                <GithubIcon />
              </a>
              {homepageUrl.length > 0 ? (
                <a href={homepageUrl} rel="noreferrer" target="_blank">
                  <EyeIcon />
                </a>
              ) : null}
            </section>
          </ProjectContainer>
        )
      )}
    </>
  )
}

export default Projects
