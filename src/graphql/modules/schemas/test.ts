// test schema
import { gql } from 'apollo-server-koa'

export default gql`
  type t1 {
    id: ID!
    content: String!
  }
`
