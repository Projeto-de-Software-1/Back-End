'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialSchema extends Schema {
  up () {
    this.create('materials', table => {
      table.increments()
      table.string('title').notNullable()
      table.string('author')
      table.string('ISBN')
      table.string('publishing_company')
      table.string('publication_date')
      table
        .integer('conservation_id')
        .unsigned()
        .references('id')
        .inTable('conservations')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('deleted').defaultTo(0)
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('materials')
  }
}

module.exports = MaterialSchema
