'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// cadastra um novo usuário
Route.post('/users', 'UserController.store')

// cria a sessao de usuário
Route.post('/login', 'SessionController.store')

// adiciona um assunto
Route.post('subject', 'SubjectController.store')

// lista todos os assuntos
Route.get('subject', 'SubjectController.index')

// adiciona e mostra os interesses do usuario
Route.post('interest', 'SubjectUserController.store').middleware('auth')
Route.get('interest', 'SubjectUserController.index').middleware('auth')

// mostra e atualiza rota
Route.get('addresses', 'AddressController.index').middleware('auth')
Route.put('addresses', 'AddressController.update').middleware('auth')

// cadastra e lista categorias
Route.post('category', 'CategoryController.store')
Route.get('category', 'CategoryController.index')

// cadastra e lista categorias
Route.post('conservation', 'ConservationController.store')
Route.get('conservation', 'ConservationController.index')

// cadastra e lista tipo da venda
Route.post('type', 'TypeController.store')
Route.get('type', 'TypeController.index')

// cadastra e lista tipo de reclamacao
Route.post('typecomplaint', 'TypeComplaintController.store')
Route.get('typecomplaint', 'TypeComplaintController.index')

// cadastra materiais
Route.resource('materials', 'MaterialController')
  .apiOnly()
  .middleware('auth')

Route.resource('ads', 'AdController')
  .apiOnly()
  .middleware('auth')

Route.resource('requests', 'RequestController')
  .apiOnly()
  .middleware('auth')
