'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Conservation extends Model {
  materials () {
    return this.belongsTo('App/Models/Material')
  }
}

module.exports = Conservation
