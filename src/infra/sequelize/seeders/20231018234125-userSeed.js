'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'João da Silva',
        email: 'joao@email.com',
      },
      {
        name: 'Maria das Graças Soares',
        email: 'mariagracas@email.com',
      },
      {
        name: 'Regina Souza',
        email: 'regina@email.com',
      },
      {
        name: 'Juliana Nunes',
        email: 'jununes@email.com',
      },
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
