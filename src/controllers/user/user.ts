import sequelize from '../../db/test'
import user from '../../db/test_table/user'
import jwt from 'jwt-simple'
import tokenConfig from '../../config/token'
import Valid from '../../tools/valid'

const getToken = (name: string) => {
  const payload = {
    exp: Date.now() + tokenConfig.expires,
    name
  }
  return jwt.encode(payload, tokenConfig.secret)
}

export default class UserController {
  static async create(ctx: any) {
    const req = ctx.request.body
    if (req.userName && req.mobile && req.password) {
      try {
        const ret = await user.createItem(req)
        const data = await user.getById(ret.id)
        ctx.body = {
          code: 1,
          msg: '创建成功',
          data
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '创建失败',
          err
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '姓名、手机号、密码不能为空'
      }
    }
  }

  static async test(ctx: any) {
    const id = ctx.params.id
    if (id) {
      try {
        const data = await sequelize.query('select * from user', { raw: true, model: user})
        if (data) {
          ctx.body = {
            code: 11,
            msg: '查询成功',
            data
          }
        } else {
          ctx.body = {
            code: -1,
            meg: '用户不存在'
          }
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '查询失败',
          err
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'id不能为空'
      }
    }
  }

  static async detail(ctx: any) {
    const id = ctx.params.id
    if (id) {
      try {
        const data = await user.getById(id)
        if (data) {
          ctx.body = {
            code: 1,
            msg: '查询成功',
            data
          }
        } else {
          ctx.body = {
            code: -1,
            meg: '用户不存在'
          }
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '查询失败',
          err
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'id不能为空'
      }
    }
  }

  static async register(ctx: any) {
    const req = ctx.request.body
    if (req.mobile && req.userName && req.password) {
      try {
        if (Valid.validMobile(req.userName)) {
          ctx.body = {
            code: -1,
            msg: '用户名不能为11位数字'
          }
          return
        }
        let data = await user.getByMobile(req.mobile)
        if (data) {
          ctx.body = {
            code: -1,
            msg: '手机号已存在'
          }
        } else {
          data = await user.getByuserName(req.userName)
          if (data) {
            ctx.body = {
              code: -1,
              msg: '用户名已存在'
            }
          } else {
            await UserController.create(ctx)
          }
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '创建失败',
          err
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '手机号、用户名、密码不能为空'
      }
    }

  }

  static async login(ctx: any) {
    const req = ctx.request.body
    if (req.name && req.password) {
      try {
        let data = await user.getByMobile(req.name)
        if (!data) {
          data = await user.getByuserName(req.name)
        }
        if (data) {
          if (data.password === req.password) {
            const token = getToken(data.userName)
            const Data = {
              id: data.id,
              userName: data.userName,
              mobile: data.mobile
            }
            ctx.body = {
              code: 1,
              msg: '登录成功',
              token,
              Data
            }
          } else {
            ctx.body = {
              code: -1,
              msg: '密码错误'
            }
          }
        } else {
          // 无用户
          ctx.body = {
            code: -1,
            msg: '用户不存在'
          }
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '登录失败',
          err
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请输入手机号和密码'
      }
    }
  }
  static async forget(ctx: any) { // 忘记密码
    console.log(1111111111111111111);
    const req = ctx.request.body
    if (req.userName && req.mobile && req.password) {
      try {
        const data = await user.getByuserName(req.userName)
        if (data) {
          if (data.mobile === req.mobile) {
            const upData = await user.updateItemById({
              userName: req.userName,
              mobile: req.mobile,
              password: req.password
            }, data.id)
            if (upData) {
              ctx.body = {
                code: 1,
                msg: '重置成功'
              }
            } else {
              ctx.body = {
                code: -1,
                msg: '重置失败'
              }
            }
          } else {
            ctx.body = {
              code: -1,
              msg: '手机号错误'
            }
          }
        } else {
          ctx.body = {
            code: -1,
            msg: '用户名不存在'
          }
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '重置失败',
          err
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '用户名、手机号、密码不能为空'
      }
    }
  }
  static async asyncModel(ctx: any) { // 模型同步
    try {
      const data = await user.asyncModel()
      if (data) {
        ctx.body = {
          code: 1,
          msg: '同步成功'
        }
      } else {
        ctx.body = {
          code: -1,
          msg: '同步失败'
        }
      }
    } catch (err) {
      ctx.body = {
        code: -1,
        msg: '同步失败',
        err
      }
    }
  }
}
