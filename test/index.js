const { GraphQLServer } =  require('graphql-yoga')
const { resolvers, SDL } = require('../index.js')
const { prisma } = require('../generated/prisma')

const server = new GraphQLServer({
  typeDefs: SDL,
  resolvers,
  context: {
    prisma
  }
})
server.start({port: 4001 }, ({port}) => console.log('Server is running on localhost:', port))
