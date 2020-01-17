import { gql } from 'apollo-server-koa'
import user from '~/graphql/schema/user' // user schema
import directive from '~/graphql/schema/directive' // 自定指令的schema实现
import test from '~/graphql/schema/test' // test schema，用于演示多个schema时的组装

export default gql`
  ${directive}
  ${user}
  ${test}
  type Query {
    todoList: [todo]! @auth(requires: ["ADMIN"])
    test: [t1]!
  }
`
