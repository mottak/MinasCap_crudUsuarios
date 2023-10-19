const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;