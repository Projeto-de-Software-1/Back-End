'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConservationSchema extends Schema {
  up () {
    this.create('conservations', table => {
      table.increments()
      table.string('conservation')
      table.timestamps()
    })
  }

  down () {
    this.drop('conservations')
  }
}

module.exports = ConservationSchema
