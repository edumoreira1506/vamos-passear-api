import express from 'express'
import constants from '../config/constants.cjs'
import BaseController from '../controllers/BaseController.js'

const { controllerCrudFunctions } = constants

const crudPathsGenerator = () => {
  const rootPath = '/'
  const showPath = '/:id'

  return [
    { method: 'get', path: rootPath, targetFunction: controllerCrudFunctions.INDEX },
    { method: 'post', path: rootPath, targetFunction: controllerCrudFunctions.CREATE },
    { method: 'get', path: showPath, targetFunction: controllerCrudFunctions.SHOW },
    { method: 'patch', path: showPath, targetFunction: controllerCrudFunctions.UPDATE },
    { method: 'delete', path: showPath, targetFunction: controllerCrudFunctions.DELETE },
  ]
}

const crudGenerator = module => {
  const router = express.Router()
  const crudPaths = crudPathsGenerator()

  crudPaths.forEach((crudItem) => {
    const { method, path, targetFunction } = crudItem
    const controller = new BaseController(module)

    router[method](path, controller[targetFunction])
  })

  console.log(crudPaths)
  return router
}

export default crudGenerator
