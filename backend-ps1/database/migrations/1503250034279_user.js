'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
<<<<<<< HEAD

=======
>>>>>>> 78e46ffca180cb6931133e496b5ad15c1aa62150
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table
        .string('username', 80)
        .notNullable()
        .unique()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table.string('password', 60).notNullable()
<<<<<<< HEAD
      /*
=======

>>>>>>> 78e46ffca180cb6931133e496b5ad15c1aa62150
      table
        .integer('id_address')
        .unsigned()
<<<<<<< HEAD
        .references("id")
        .inTable("addresses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      */
=======
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

>>>>>>> 78e46ffca180cb6931133e496b5ad15c1aa62150
      table.date('birth').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
