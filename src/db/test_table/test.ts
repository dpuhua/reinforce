/**
 * schema user, user表
 */
import { Table, Column } from 'sequelize-typescript'
import baseTable from '../base_table/base_table'

@Table({
  tableName: 'test'
})
export default class Test extends baseTable {
  static async getByMobile<T extends Test>(mobile: string) {
    const item = await this.findOne({
      where: {
        mobile
      }
    })
    return item as T
  }

  static async getByuserName<T extends Test>(userName: string) {
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
