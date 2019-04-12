'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComplaintSchema extends Schema {
  up () {
    this.create('complaints', table => {
      table.increments()
      table.text('message')
      table
        .integer('type_complaint_id')
        .unsigned()
        .references('id')
        .inTable('type_complaints')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('complaints')
  }
}

module.exports = ComplaintSchema
