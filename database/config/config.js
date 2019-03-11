require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: 5400,
    dialect: 'postgres',
  },
  test: {
    username: 'postgre',
    password: 'postgres',
    database: 'imenu_tedb',
    host: '127.0.0.1',
    port: 5400,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
};
