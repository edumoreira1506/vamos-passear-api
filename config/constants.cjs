const { NODE_ENV } = process.env

const environments = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
}

const ENVIRONMENT = NODE_ENV || environments.DEVELOPMENT

const controllerCrudFunctions = {
  CREATE: 'store',
  DELETE: 'remove',
  INDEX: 'index',
  SHOW: 'show',
  UPDATE: 'update',
}

module.exports = {
  environments,
  ENVIRONMENT,
  controllerCrudFunctions,
}
