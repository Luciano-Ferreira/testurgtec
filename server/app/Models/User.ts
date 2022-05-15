import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column()
  public departmentId: number

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

  @column()
  public department: string
}
