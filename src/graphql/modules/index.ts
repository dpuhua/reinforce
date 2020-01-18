// query
import query from '~/graphql/schemas/common/query'

// mutation
import mutation from '~/graphql/schemas/common/mutation'

// typeDefs
import directive from '~/graphql/schemas/common/directive'
import user from '~/graphql/schemas/user'
import test from '~/graphql/schemas/test'

// resolvers
import userResolvers from '~/graphql/resolvers/user'
import testResolvers from '~/graphql/resolvers/test'

const modules = [
  { typeDefs: query },
  { typeDefs: mutation },
  { typeDefs: directive },
  { typeDefs: user, resolvers: userResolvers },
  { typeDefs: test, resolvers: testResolvers }
]

export default modules
