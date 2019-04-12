'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialSubjectSchema extends Schema {
  up () {
    this.create('material_subjects', table => {
      table.increments()
      table
        .integer('material_id')
        .unsigned()
        .references('id')
        .inTable('materials')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('subject_id')
        .unsigned()
        .references('id')
        .inTable('subjects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('material_subjects')
  }
}

module.exports = MaterialSubjectSchema
