'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ad extends Model {
  materials () {
    return this.belongsTo('App/Models/Material')
  }
  complaints () {
    return this.hasMany('App/Models/Complaint')
  }
  types () {
    return this.belongsTo('App/Models/Type')
  }
  requests () {
    return this.hasMany('App/Models/Request')
  }
  users () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Ad
