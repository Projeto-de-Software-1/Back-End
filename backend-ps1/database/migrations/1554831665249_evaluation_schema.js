'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluationSchema extends Schema {
  up () {
    this.create('evaluations', table => {
      table.increments()
      table.float('rate').notNullable()
      table.text('comment')
      table
        .integer('analyzes_id')
        .unsigned()
        .references('id')
        .inTable('analyzes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('evaluated_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('evaluator_id')
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
    this.drop('evaluations')
  }
}

module.exports = EvaluationSchema
