'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Request extends Model {
  ads () {
    return this.belongsTo('App/Models/Ad')
  }
  users () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Request
