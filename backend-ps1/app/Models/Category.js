'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  materials () {
    return this.belongsToMany('App/Models/Material')
  }
}

module.exports = Category
