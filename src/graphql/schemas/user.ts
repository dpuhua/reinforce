// user schema
import { gql } from 'apollo-server-koa'

export default gql`
  type todo {
    id: ID!
    content: String!
    completed: Boolean!
  }
`
