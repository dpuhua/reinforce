import UserController from '../controllers/user/user'
import Router from 'koa-router'

const router = new Router()

router.prefix('/api/user')

router.get('/getUserById/:id', UserController.detail)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/forget', UserController.forget)

router.get('/test/:id', UserController.test)

router.get('/', (ctx, next) => {
  ctx.body = 'this is a user response!'
})

router.get('/bar', (ctx, next) => {
  ctx.body = 'this is a user/bar response'
})
router.get('/asyncModel', UserController.asyncModel)

export default router
