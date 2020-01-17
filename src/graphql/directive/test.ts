import { SchemaDirectiveVisitor } from 'apollo-server-koa'
import { defaultFieldResolver } from 'graphql'

class TestDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = (...args: any) => {
      return resolve.apply(this, args)
    }
  }
}

export default {
  test: TestDirective
}
