// test 数据库
import { Sequelize } from 'sequelize-typescript'

const env: any = process.env

const sequelize = new Sequelize(env.db_name, env.db_user, env.db_pw, {
  host: env.db_host,
  port: env.db_port,
  dialect: env.db_dialect,
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

export default sequelize
