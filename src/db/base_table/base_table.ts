/**
 * 基础table类型，添加公共方法，其它表都继承此类
 */
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'base_table'
})

export default class BaseTable extends Model<BaseTable> {
  // 添加
  static async createItem<T extends BaseTable>(item: T) {
    return await this.create(item)
  }

  // 删除
  static async deleteById(rid: number) {
    return await this.destroy({
      where: {
        rid
      }
    })
  }

  // 更新
  static async updateItemById(item: any, rid: number) {
    const data = await this.update(item, { where: { rid } })
    return data
  }

  // 查询所有
  static async getList<T extends BaseTable>() {
    const items = await this.findAll({raw: true});
    return items as T[];
  }

  // 通过rid查询
  static async getById<T extends BaseTable>(rid: number) {
    const item = await this.findOne({
      raw: true,
      where: {
        rid
      }
    })
    return item as T
  }

  // 模型同步
  static async asyncModel<T extends BaseTable>() {
    const item = await this.sync({
      alter: true
    })
    return item as T
  }

  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  rid!: number

  // 字符串索引
  [index: string]: any

}
