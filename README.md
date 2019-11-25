# reinforce
## koa + sequelize + mysql + typescript
#### 目前没有区分开发和生产环境
#### 
#### 启动开发环境 npm run dev
#### 
#### 生产环境
#### --| 1、docker：Dockerfile配置
#### --| 2、pm2：npm run build 之后再 npm run prd
#### --| 3、node：npm run build 之后再 npm run dist
#### 
##### |--src                              资源目录
##### |---|--app.ts                       入口文件
##### |---|--config                       配置文件
##### |---|---|--token.ts                 token配置
##### |---|---|--whitelist.ts             白名单配置
##### |---|--controllers                  控制层--逻辑层
##### |---|---|--user                     用户相关逻辑
##### |---|--db                           数据库
##### |---|---|--base_table.ts            表基类
##### |---|---|--user.ts                  用户表
##### |---|--public                       公共资源目录
##### |---|--routes                       路由目录
##### |---|--views                        中间页面层
##### |--dist                             打包文件
##### |--bin                              启动文件
