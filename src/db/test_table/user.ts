/**
 * schema user, user表
 */
import { Table, Column } from 'sequelize-typescript'
import baseTable from '../base_table/base_table'

@Table({
  tableName: 'user'
})
export default class User extends baseTable {

  static async getByMobile<T extends User>(mobile: string) {
    const item = await this.findOne({
      where: {
        mobile
      }
    })
    return item as T
  }

  static async getByuserName<T extends User>(userName: string) {
    const item = await this.findOne({
      where: {
        userName
      }
    })
    return item as T
  }

  @Column({
    allowNull: true
  })
  userName!: string

  @Column({
    allowNull: true
  })
  mobile!: string

  @Column({
    allowNull: true
  })
  password!: string

  @Column({
    allowNull: true
  })
  sex!: string

  freezeTableName: boolean = true
}
