'use strict'

const Subject = use('App/Models/Subject')
class SubjectController {
  async store ({ request }) {
    const data = request.only(['subject'])
    const subject = await Subject.create(data)
    return subject
  }
}

module.exports = SubjectController
