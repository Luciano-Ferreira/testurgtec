import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async listAllUsers() {
    const users = await User.all()
    return {
      data: users,
    }
  }

  public async listAUser({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return {
      data: user,
    }
  }

  public async updateUser({ request, params }: HttpContextContract) {
    const body = request.body()

    const user = await User.findOrFail(params.id)

    user.name = body.name
    user.gender = body.gender
    user.birthDate = body.birthDate
    user.email = body.email
    user.active = body.active
    user.department = body.department

    await user.save()

    return {
      message: 'Usuário atualizado com sucesso!',
      data: user,
    }
  }

  public async createUser({ request, response }: HttpContextContract) {
    const body = request.body()
    const user = await User.create(body)

    response.status(201)

    return {
      message: 'Usuário inserido no banco!',
      data: user,
    }
  }

  public async deleteUser({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return {
      message: 'Usuário excluido com sucesso!',
      data: user,
    }
  }
}
