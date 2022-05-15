import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('gender', 1).notNullable()
      table.dateTime('birth_date').notNullable()
      table.string('email').notNullable()
      table.enu('active', ['active', 'inactive']).notNullable().defaultTo('active')
      table.timestamp('created_at', { useTz: true })
      table.integer('department_id').unsigned().references('departments.id')
      table.string('department', 255).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
