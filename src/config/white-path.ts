// 白名单配置，当前路由和当前路由+任意字符串可通过白名单
const whitePaths: string[] = [
  '/api/user/login',
  '/api/user/register',
  '/api/user/forget',
  '/api/user/test',
  '/graphql'
]

export default new RegExp(`^${whitePaths.map((item) => `(${item})`).join('|') || '$'}`)
