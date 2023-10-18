const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    Name: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;