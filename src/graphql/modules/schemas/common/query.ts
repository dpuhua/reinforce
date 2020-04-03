// 查询 query集中
import { gql } from 'apollo-server-koa'

export default gql`
  type Query {
    todoList: [todo]! @auth(requires: ["ADMIN"])
    test: [t1]
  }
`
