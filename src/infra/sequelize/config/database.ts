import { Options } from 'sequelize';

const config: Options = {
  username: 'kissyla',
  password: '123456',
  database: 'users_db',
  host: 'localhost',
  port:  3000,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
