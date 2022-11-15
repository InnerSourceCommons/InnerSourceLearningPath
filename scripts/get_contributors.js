require('dotenv').config()
const { graphql } = require("@octokit/graphql")

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.TOKEN}`
  }
})

module.exports = async function (filepath) {
  // Translate Windows-style paths to Unix-style paths.
  filepath = filepath.replace(/\\/g, "/")
  const { repository: { object: { history } } } = await graphqlWithAuth(
    `{
      repository(owner: "InnerSourceCommons", name: "InnerSourceLearningPath") {
        object(expression: "main") {
          ... on Commit {
            history(first: 100, path: "${filepath}") {
              totalCount
              nodes {
                authors(first: 100) {
                  nodes {
                    name
                    user {
                      name
                      url
                    }
                  }
                }
                associatedPullRequests(last: 1, orderBy: {field: UPDATED_AT, direction: DESC}) {
                  nodes {
                    reviews(first:100) {
                      nodes {
                        author {
                          ... on User {
                            login
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
  )

  if (history.totalCount > 100) {
    // Needs addressing properly, but deferring to avoid merge conflicts with https://github.com/InnerSourceCommons/InnerSourceLearningPath/pull/380
    console.warn('This script needs updating to handle >100 commits')
  }

  const authors = history.nodes.flatMap(({ authors }) => {
    return authors.nodes.map(author => {
      return {
        name: (author.user && author.user.name) || author.name,
        url: author.user && author.user.url
      }
    })
  })

  const reviewers = history.nodes.flatMap(({ associatedPullRequests }) => {
    return associatedPullRequests.nodes.flatMap(({ reviews }) => {
      return reviews.nodes.map(({ author }) => {
        return {
          name: author.name || author.login,
          url: author.url
        }
      })
    })
  })

  return Object.values(
    [...authors, ...reviewers].reduce((accumulator, user) => {
      // Dedupe users
      accumulator[user.name] = user
      return accumulator
    }, {})
  )
}
