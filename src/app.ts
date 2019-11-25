import Koa from 'koa'
const app = new Koa()
import views from 'koa-views' // 可以通过ctx.render进行视图模板渲染
import json from 'koa-json' // 支持post相应json格式的中间件
import bodyparser from 'koa-bodyparser' // 处理post请求
import logger from 'koa-logger' // 输出请求日志，此处只是在控制台打印的
import cors from 'koa2-cors' // 跨域设置
import koaJwt from 'koa-jwt' // Json Web Tokens 用于token认证
import jwt from 'jwt-simple' // 用于操作jwt产生的token，列如间token中的信息提取
import koaStatic from 'koa-static' // 加载本地文件
import http from 'http'
import sequelize from '~/db/test' // test数据库
import * as models from '~/db/test_table' // 模型，test数据库下的表

import * as routers from './routes' // 路由
import tokenConfig from './config/token' // token配置

// sequelize添加模型
sequelize.addModels(Object.values(models))

// middlewares
app.use(cors()) // 此处跨域有问题，应该传入参数，不应该在下面直接设置响应头
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  // origin
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  await next().then( () => {
    if (ctx.status === 404) {
      ctx.body = {
        code: -1,
        msg: '接口不存在'
      }
    }
    // 请求成功返回200状态码，数据正确性通过body的code区分
    ctx.status = 200
  }).catch( (err) => {
    // token error
    if (err.status === 401) {
      ctx.body = {
        code: -11,
        msg: '未登录'
      }
    } else {
      throw err
    }
  })
})

// 白名单配置
const widthPath = /^\/api\/user\/(login|register|forget|test)/

// valid
app.use(koaJwt({secret: tokenConfig.secret}).unless({
  path: [widthPath]
}))

// valid token
app.use(async (ctx, next) => {
  if (!widthPath.test(ctx.url)) {
    const deToken = jwt.decode(ctx.request.header.authorization.replace('Bearer ', ''), tokenConfig.secret)
    const expTime = deToken.exp - new Date().getTime()
    if (expTime < 0) {
      ctx.body = {
        code: -17,
        msg: '登录已失效'
      }
    } else {
      await next()
    }
  } else {
    await next()
  }
})

// routes
Object.values(routers).forEach((route) => {
  app.use(route.routes())
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

const server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen('8687');
