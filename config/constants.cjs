const { NODE_ENV } = process.env;

const environments = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
}

const ENVIRONMENT = NODE_ENV || environments.DEVELOPMENT;

module.exports = {
  environments,
  ENVIRONMENT,
};
