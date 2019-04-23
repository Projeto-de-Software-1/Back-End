'use strict'

class MaterialController {
  async index ({ auth }) {
    const materials = await auth.user
      .materials()
      .where('deleted', 0)
      .with('subjects')
      .fetch()
    return materials
  }

  async show ({ params, auth, response }) {
    const material = await auth.user
      .materials()
      .where('materials.id', params.id)
      .where('deleted', 0)
      .with('subjects')
      .fetch()
    if (material.rows.length === 0) {
      response.status(404).send({ message: 'Material não encontrado' })
    }
    return material
  }

  async store ({ request, auth }) {
    const data = request.only([
      'title',
      'author',
      'publishing_company',
      'category_id',
      'conservation_id'
    ])
    const subjects = request.input(['subject'])
    const material = await auth.user.materials().create(data)
    await material.subjects().sync(subjects)

    return material
  }

  async update ({ request, params, auth, response }) {
    const material = await auth.user
      .materials()
      .where('materials.id', params.id)
      .where('deleted', 0)
      .first()
    const data = request.only([
      'title',
      'author',
      'publishing_company',
      'category_id',
      'conservation_id'
    ])
    const subjects = request.input(['subject'])

    if (material) {
      material.merge(data)
      await material.save()
      await material.subjects().sync(subjects)
      return material
    }
    response.status(404).send({ message: 'Material não encontrado' })
  }

  async destroy ({ auth, params, response }) {
    const material = await auth.user
      .materials()
      .where('materials.id', params.id)
      .first()
    if (material) {
      material.deleted = 1
      await material.save()
      return material
    }
    response.status(404).send({ message: 'Material não encontrado' })
  }
}

module.exports = MaterialController
