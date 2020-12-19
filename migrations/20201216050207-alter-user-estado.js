'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'estado', {
      type: Sequelize.INTEGER
    },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users');
  }
};