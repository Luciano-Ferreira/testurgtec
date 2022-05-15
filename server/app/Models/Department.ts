import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public department: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @hasOne(() => User)
  public profile: HasOne<typeof User>
}
