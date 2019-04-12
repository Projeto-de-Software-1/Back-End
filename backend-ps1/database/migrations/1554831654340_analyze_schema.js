'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnalyzeSchema extends Schema {
  up () {
    this.create('analyzes', table => {
      table.increments()
      table.string('description').notNullable()
      table.integer('deleted').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('analyzes')
  }
}

module.exports = AnalyzeSchema
