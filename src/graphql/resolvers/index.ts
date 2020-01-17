import user from '~/graphql/resolvers/user'
import test from '~/graphql/resolvers/test'

export default [user, test].reduce((pre: any, cur: any) => {
  for (const i of Object.keys(cur)) {
    pre[i] = Object.assign((pre[i] || {}), cur[i])
  }
  return pre
}, {})
