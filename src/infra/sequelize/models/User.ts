import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';


class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
 name: {
    type: STRING,
    allowNull: false,
  },

  email: {
    type: STRING,
    allowNull: false,
  },

}, {
  sequelize: db,
  timestamps: false,
  modelName: 'users',
});

export default User;
