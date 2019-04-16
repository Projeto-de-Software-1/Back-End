'use strict'

const Conservation = use('App/Models/Conservation')

class ConservationController {
  async index () {
    const conservations = await Conservation.all()
    return conservations
  }

  async store ({ request }) {
    const data = request.only(['conservation'])
    const conservations = await Conservation.create(data)
    return conservations
  }
}

module.exports = ConservationController
