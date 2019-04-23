'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
  ads () {
    return this.belongsTo('App/Models/Ad')
  }
}

module.exports = Type
