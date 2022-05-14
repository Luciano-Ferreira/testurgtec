import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Department from './Department'

export default class User extends BaseModel {
  @hasOne(() => Department)
  public departmentId: HasOne<typeof Department>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public gender: string

  @column()
  public birthDate: string

  @column()
  public email: string

  @column()
  public active: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
