'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Evaluation extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }
  analyzes () {
    return this.hasOne('App/Models/Analyze')
  }
}

module.exports = Evaluation
