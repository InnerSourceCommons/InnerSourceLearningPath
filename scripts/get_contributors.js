require('dotenv').config()
const { Octokit } = require("@octokit/core")
const { throttling } = require("@octokit/plugin-throttling")

module.exports = async function (filepath) {
  const unixStyleFilepath = filepath.replace(/\\/g, "/")
  const EnhancedOctokit = Octokit.plugin(throttling)
  const octokit = new EnhancedOctokit({
    auth: process.env.TOKEN,
    throttle: {
      onRateLimit: (retryAfter, options, octokit, retryCount) => {
        if (retryCount <= 1) {
          octokit.log.info(`Request quota reached for ${options.method} ${options.url}, retrying after ${retryAfter} seconds`)
          return true
        }
        octokit.log.warn(`Request quota exhausted for ${options.method} ${options.url}`)
        return false
      },
      onSecondaryRateLimit: (retryAfter, options, octokit) => {
        // does not retry, only logs a warning
        octokit.log.warn(`SecondaryRateLimit hit for request ${options.method} ${options.url}`)
      },
    },
  })
  const { repository: { object: { history } } } = await octokit.graphql(
    `query ($filepath: String!) {
      repository(owner: "InnerSourceCommons", name: "InnerSourceLearningPath") {
        object(expression: "main") {
          ... on Commit {
            history(first: 100, path: $filepath) {
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
    }`, {
      filepath: unixStyleFilepath
    }
  )

  if (history.totalCount > 100) {
    // Needs addressing properly, but deferring to avoid merge conflicts with https://github.com/InnerSourceCommons/InnerSourceLearningPath/pull/380
    console.warn('This script needs updating to handle >100 commits: ', unixStyleFilepath)
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
