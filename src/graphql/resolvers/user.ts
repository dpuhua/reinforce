// user resolvers
export default {
  Query: {
    todoList(root: any, args: any, context: any) {
      // console.log(root)
      // console.log(args)
      // console.log(context)
      console.log(33333333333333333)

      return [{
        _id: 'abbbbb',
        content: 'test1',
        completed: false
      }]
    }
  }
}
