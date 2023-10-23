import { Sequelize } from "sequelize"

const sequelize = new Sequelize('postgres://kissyla:123456@localhost:5432/users_db')

export default sequelize