require('dotenv').config();

const { environments, ENVIRONMENT } = require('./constants.cjs');

const SSL_DIALECT_OPTIONS = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}

const COMMON_CONFIG = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  maxConcurrentQueries: 100,
  pool: {
    maxConnections: 5,
    maxIdleTime: 30
  },
  additional: {
    timestamps: true,
    underscored: true
  },
};

const DEVELOPMENT_CONFIG = {
  ...COMMON_CONFIG,
};

const STAGING_CONFIG = {
  ...COMMON_CONFIG,
  ...SSL_DIALECT_OPTIONS,
}

const PRODUCTION_CONFIG = {
  ...COMMON_CONFIG,
  ...SSL_DIALECT_OPTIONS,
};

const configs = {
  [environments.DEVELOPMENT]: DEVELOPMENT_CONFIG,
  [environments.PRODUCTION]: PRODUCTION_CONFIG,
  [environments.STAGING]: STAGING_CONFIG,
};

module.exports = configs[ENVIRONMENT];
