'use strict'

class AdController {
  async store ({ request, auth, response }) {
    const data = request.only(['material_id', 'type_id', 'price', 'duration'])

    const material = await auth.user
      .materials()
      .where('id', data.material_id)
      .first()
    const existingAd = material
      .ads()
      .where('deleted', 0)
      .first()
    if (existingAd) {
      return response
        .status(401)
        .send({ message: 'Material já possui um anúncio' })
    }

    const ad = await auth.user.ads().create(data)
    return ad
  }

  async index ({ auth }) {
    const ads = await auth.user
      .ads()
      .with('materials')
      .with('types')
      .where('deleted', 0)
      .fetch()
    return ads
  }

  async show ({ auth, params, response }) {
    const ad = await auth.user
      .ads()
      .where('deleted', 0)
      .where('id', params.id)
      .with('materials')
      .with('types')
      .fetch()

    if (ad.rows.length === 0) {
      return response.status(404).send({ message: 'Anúncio nao encontrado' })
    }
    return ad
  }

  /**
   * TODO
   * verificar tipos de anúncio, verificar se anúncio ja possui requests
   *
   */
  async update ({ request, auth, params, response }) {
    const ad = await auth.user
      .ads()
      .where('deleted', 0)
      .where('id', params.id)
      .first()

    if (!ad) {
      return response.status(404).send({ message: 'Anúncio nao encontrado' })
    }
    const data = request.only(['type_id', 'price', 'duration'])
    ad.merge(data)
    await ad.save()
    return ad
  }

  /**
   * TODO
   * verificar se anúncio ja possui requests
   *
   */
  async destroy ({ params, auth, response }) {
    const ad = await auth.user
      .ads()
      .where('deleted', 0)
      .where('id', params.id)
      .first()
    console.log(ad)
    if (!ad) {
      return response.status(404).send({ message: 'Anúncio nao encontrado' })
    }
    ad.deleted = 1
    await ad.save()
  }
}

module.exports = AdController
