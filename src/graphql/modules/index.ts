// query
import query from '~/graphql/modules/schemas/common/query'

// mutation
import mutation from '~/graphql/modules/schemas/common/mutation'

// directive主要用于鉴权
import directive from '~/graphql/modules/schemas/common/directive'

// typeDefs
import user from '~/graphql/modules/schemas/user'
import test from '~/graphql/modules/schemas/test'

// resolvers
import userResolvers from '~/graphql/modules/resolvers/user'
import testResolvers from '~/graphql/modules/resolvers/test'

const modules = [
  { typeDefs: query },
  { typeDefs: mutation },
  { typeDefs: directive },
  { typeDefs: user, resolvers: userResolvers },
  { typeDefs: test, resolvers: testResolvers }
]

export default modules
