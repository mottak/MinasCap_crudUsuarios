const fs = require('fs');

module.exports = {
  development: {
    username: 'kissyla',
    password: '123456',
    database: 'users_db',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
    
  },
  
};