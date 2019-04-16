'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Complaint extends Model {
  types () {
    return this.hasOne('App/Models/TypeComplaint')
  }
  ads () {
    return this.belongsTo('App/Models/Ad')
  }
}

module.exports = Complaint
