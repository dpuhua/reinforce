// 查询 query集中
import { gql } from 'apollo-server-koa'

export default gql`
  type Mutation {
    updateUser (
      id: ID!
    ): todo
  }
`
