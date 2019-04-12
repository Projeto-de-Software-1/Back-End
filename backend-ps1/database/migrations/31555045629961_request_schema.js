'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestSchema extends Schema {
  up () {
    this.create('requests', table => {
      table.increments()
      table
        .integer('ad_id')
        .unsigned()
        .references('id')
        .inTable('ads')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('accepted_ad_id')
        .unsigned()
        .references('id')
        .inTable('ads')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('deleted').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('requests')
  }
}

module.exports = RequestSchema
