'use strict'

class RequestController {
  async store ({ request, auth }) {
    const data = request.only(['ad_id'])
    const userRequest = await auth.user.requests().create(data)
    return userRequest
  }
  async index ({ auth }) {
    const request = auth.user
      .requests()
      .where('deleted', 0)
      .with('ads')
      .with('users')
      .fetch()
    return request
  }
  async show () {}
  async update () {}
  async destroy () {}
}

module.exports = RequestController
