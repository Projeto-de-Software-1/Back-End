'use strict'

const TypeComplaint = use('App/Models/TypeComplaint')

class TypeComplaintController {
  async index () {
    const typesComplaint = TypeComplaint.all()
    return typesComplaint
  }

  async store ({ request }) {
    const data = request.only(['complaint'])
    const typesComplaint = await TypeComplaint.create(data)
    return typesComplaint
  }
}

module.exports = TypeComplaintController
