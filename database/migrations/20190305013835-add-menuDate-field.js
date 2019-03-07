module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Menus', 'menuDate', { type: Sequelize.DATE });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Menus', 'menuDate');
  },
};
