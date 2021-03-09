require('dotenv').config()
const { graphql } = require("@octokit/graphql")

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.TOKEN}`
  }
})

module.exports = async function (filepath) {
  const { repository: { object: { history }}} = await graphqlWithAuth(
    `{
      repository(owner: "InnerSourceCommons", name: "InnerSourceLearningPath") {
        object(expression: "master") {
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
              }
            }
          }
        }
      }
    }`
  )

  if (history.totalCount > 100) {
    throw Error('This script needs updating to handle >100 commits')
  }

  return Object.values(
    history.nodes.flatMap(({ authors }) => {
      return authors.nodes.map(author => {
        return {
          name: (author.user && author.user.name) || author.name,
          url: author.user && author.user.url
        }
      })
    }).reduce((accumulator, user) => {
      // Dedupe users
      accumulator[user.name] = user
      return accumulator
    }, {})
  )
}
