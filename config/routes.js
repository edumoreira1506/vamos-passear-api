import express from 'express'

import crudGenerator from '../generators/crudGenerator.js'

import HomeController from '../controllers/HomeController.js'

import UserModule from '../modules/User/index.js'

const routes = express.Router()

routes.get('/', HomeController.index)

routes.use('/users', crudGenerator(UserModule))

export default routes
