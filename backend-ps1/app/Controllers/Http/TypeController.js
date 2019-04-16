'use strict'

const Type = use('App/Models/Type')

class TypeController {
  async index () {
    const types = Type.all()
    return types
  }

  async store ({ request }) {
    const data = request.only(['type'])
    const types = await Type.create(data)
    return types
  }
}

module.exports = TypeController
