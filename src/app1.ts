import Koa from 'koa'
import {ApolloServer, gql} from 'apollo-server-koa'

const app = new Koa()

const typeDefs = gql`
  type todo {
    _id: ID!
    content: String!
    completed: Boolean!
  }
  type Query {
    todoList: [todo]!
  }
`
const server = new ApolloServer({
  typeDefs,
  mocks: true
})

server.applyMiddleware({ app })

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(process.env.port, () => {
  console.log(`server ready at port: ${process.env.port}--${server.graphqlPath}`)
})
