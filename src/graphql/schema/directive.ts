// 自定义指令的schema实现，目前主要是权限管理
export default `
  directive @auth(requires: [String]) on FIELD_DEFINITION
`
