'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {
  users () {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/SubjectUser'
    )
  }
  materials () {
    return this.belongsToMany('App/Models/Material').pivotModel(
      'App/Models/MaterialSubject'
    )
  }
}

module.exports = Subject
