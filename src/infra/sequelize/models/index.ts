// import { Sequelize } from 'sequelize-typescript';
import { Sequelize } from "sequelize"
// const sequelize = new Sequelize({
//   database: 'users_db',
//   dialect: 'postgres',
//   username: 'kissyla',
//   password: '123456',
//   models: [__dirname + './User'], 
// });
const sequelize = new Sequelize('postgres://kissyla:123456@localhost:5432/users_db')

export default sequelize