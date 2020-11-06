require('dotenv').config()
const { graphql } = require("@octokit/graphql")

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.TOKEN}`
  }
})

module.exports = async function (filepath) {
  const contributors = await graphqlWithAuth(
    `{
      repository(owner: "InnerSourceCommons", name: "InnerSourceLearningPath") {
        object(expression: "master") {
          ... on Commit {
            history(first: 100, path: "${filepath}") {
              totalCount
              nodes {
                author {
                  name
                  user {
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    }`
  )

  const history = contributors.repository.object.history

  if (history.totalCount > 100) {
    throw Error('This script needs updating to handle >100 commits')
  }

  return Object.values(history.nodes.reduce((acc, { author }) => {
    const name = (author.user && author.user.name) || author.name
    acc[name] = {
      name,
      url: author.user && author.user.url
    }
    return acc
  }, {}))
}