# graphql文件夹
## directive  用于自定义指令，目前主要用于权限管理，指令的schema实现位于~/graphql/schemas/common/directive
## modules 生成apollo-server链接schema和resolves的modules参数，schema位于~/graphql/schemas，resolvers位于~/graphql/resolvers
## resolvers resolvers文件，实现~/graphql/schemas/*下面除了common以外的resolver，文件名一一对应
## schemas schemas
#### schemas/common directive，query，mutation，subscribe等公共schema
