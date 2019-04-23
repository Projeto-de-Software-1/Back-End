'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Material extends Model {
  subjects () {
    return this.belongsToMany('App/Models/Subject').pivotModel(
      'App/Models/MaterialSubject'
    )
  }
  categories () {
    return this.hasOne('App/Models/Category')
  }
  conservations () {
    return this.hasOne('App/Models/Conservation')
  }
  ads () {
    return this.hasOne('App/Models/Ad')
  }
  users () {
    return this.belongsTo('App/Models/user')
  }
}

module.exports = Material
