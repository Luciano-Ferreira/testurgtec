/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('departments', 'DepartmentsController.listAllDepartments')
  Route.post('departments', 'DepartmentsController.createDepartment')
  Route.get('department/:id', 'DepartmentsController.listADepartment')
  Route.delete('department/:id', 'DepartmentsController.deleteDepartment')
  Route.patch('department/:id', 'DepartmentsController.updateDepartment')

  Route.get('users', 'UsersController.listAllUsers')
  Route.post('users', 'UsersController.createUser')
  Route.get('user/:id', 'UsersController.listAUser')
  Route.delete('user/:id', 'UsersController.deleteUser')
  Route.patch('user/:id', 'UsersController.updateUser')
}).prefix('/api')
