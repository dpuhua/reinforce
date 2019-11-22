# reinforce
## koa + sequelize + mysql + typescript
### |--src                              资源目录
### |---|--app.ts                       入口文件
### |---|--config                       配置文件
### |---|---|--token.ts                 token配置
### |---|---|--whitelist.ts             白名单配置
### |---|--controllers                  控制层--逻辑层
### |---|---|--user                     用户相关逻辑
### |---|--db                           数据库
### |---|---|--base_table.ts            表基类
### |---|---|--user.ts                  用户表
### |---|--public                       公共资源目录
### |---|--routes                       路由目录
### |---|--views                        中间页面层
### |--dist                             打包文件
### |--bin                              启动文件
