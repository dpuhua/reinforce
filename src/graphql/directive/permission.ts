import { SchemaDirectiveVisitor } from 'apollo-server-koa'
import { defaultFieldResolver } from 'graphql'

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field
    const { requires } = this.args
    field.resolve = (...args: any) => {
      console.log(2222222222222222222)
      // console.log(args)
      console.log(requires)
      return resolve.apply(this, args)
    }
  }
}

export default {
  auth: AuthDirective
}
