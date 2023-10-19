// import { Sequelize } from 'sequelize';
// import * as config from '../config/database';

// const sequelize = new Sequelize(config)

// export default sequelize;

import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'postgres',
  username: 'kissyla',
  password: '123456',
  models: [__dirname + '/models'+ 'User'], 
});
