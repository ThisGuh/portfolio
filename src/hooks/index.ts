import { useStaticQuery, graphql } from 'gatsby'
import { ReposQuery } from 'interfaces'

export const useReposData = () => {
  const { github }: ReposQuery = useStaticQuery(
    graphql`
      query RepoQuery {
        github {
          viewer {
            repositories(
              affiliations: OWNER
              privacy: PUBLIC
              first: 10
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
              nodes {
                name
                url
                repositoryTopics(first: 5) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                description
                createdAt
              }
            }
          }
        }
      }
    `
  )
  return github.viewer.repositories
}
