'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with subjectusers
 */
class SubjectUserController {
  /**
   * Show a list of all subjectusers.
   * GET subjectusers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const interests = auth.user.subjects().fetch()
    return interests
  }

  async store ({ request, auth }) {
    const data = request.input(['subject'])
    const interests = await auth.user.subjects().sync(data)
    return interests
  }
}

module.exports = SubjectUserController
