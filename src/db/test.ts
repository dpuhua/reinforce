// test 数据库
import { Sequelize } from 'sequelize-typescript'
import user from './test_table/user'

const sequelize = new Sequelize('test', 'root', 'dph123', {
  host: '47.92.206.102',
  port: 8306,
  dialect: 'mysql',
  dialectOptions: {
    // 字符集
    bigNumberStrings: true,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    supportBigNumbers: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00' // 东8时区
})

sequelize.addModels([user])
// 自动创建表 force为true时会先删除再创建
user.sync({
  force: false
})

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully')
})
.catch((err: any) => {
  console.log('Unable to connect to the database:', err)
})

export { sequelize, user }
