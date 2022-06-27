export interface ReposQuery {
  github: {
    viewer: {
      repositories: {
        nodes: [
          {
            name: string
            url: string
            createdAt: string
            homepageUrl: string
            description: string
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
        ]
      }
    }
  }
}
