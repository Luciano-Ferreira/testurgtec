import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Department from 'App/Models/Department'

export default class DepartmentsController {
  public async listAllDepartments() {
    const departments = await Department.all()
    return {
      data: departments,
    }
  }

  public async listADepartment({ params }: HttpContextContract) {
    const department = await Department.findOrFail(params.id)

    return {
      data: department,
    }
  }

  public async updateDepartment({ request, params }: HttpContextContract) {
    const body = request.body()

    const department = await Department.findOrFail(params.id)

    department.department = body.department

    await department.save()

    return {
      message: 'Departamento atualizado com sucesso!',
      data: department,
    }
  }

  public async createDepartment({ request, response }: HttpContextContract) {
    const body = request.body()
    const department = await Department.create(body)

    response.status(201)

    return {
      message: 'Departamento inserido no banco!',
      data: department,
    }
  }

  public async deleteDepartment({ params }: HttpContextContract) {
    const department = await Department.findOrFail(params.id)

    await department.delete()

    return {
      message: 'Departamento excluido com sucesso!',
      data: department,
    }
  }
}
