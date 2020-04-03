// user resolvers
export default {
  Query: {
    todoList(root: any, args: any, context: any) {
      // console.log(root)
      // console.log(args)
      // console.log(context)
      console.log(33333333333333333)

      return [{
        id: 'abbbbb',
        content: 'test1',
        completed: false
      }]
    }
  },
  Mutation: {
    updateUser(root: any, args: any) {
      console.log(args)
      return {
        id: '1231',
        content: 'aaa'
      }
    }
  }
}
