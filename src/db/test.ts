// test 数据库
import Sequelize from '~/config/db'

Sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully')
})
.catch((err: any) => {
  console.log('Unable to connect to the database:', err)
})

export default Sequelize
