'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeComplaintSchema extends Schema {
  up () {
    this.create('type_complaints', table => {
      table.increments()
      table.string('complaint').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_complaints')
  }
}

module.exports = TypeComplaintSchema
