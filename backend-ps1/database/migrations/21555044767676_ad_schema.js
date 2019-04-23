'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdSchema extends Schema {
  up () {
    this.create('ads', table => {
      table.increments()
      table.integer('duration')
      table.decimal('price', 9, 4)
      table.date('loan_start')
      table
        .integer('material_id')
        .unsigned()
        .references('id')
        .inTable('materials')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('deleted').defaultTo(0)

      table.timestamps()
    })
  }

  down () {
    this.drop('ads')
  }
}

module.exports = AdSchema
