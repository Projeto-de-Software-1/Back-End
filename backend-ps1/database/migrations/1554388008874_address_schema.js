'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', table => {
      table.increments()
      table.timestamps()
      table.string('CEP').notNullable()
      table.string('city').notNullable()
      table.string('district').notNullable()
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('complement')
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
