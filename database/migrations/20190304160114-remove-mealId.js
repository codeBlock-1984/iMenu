module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Menus', 'mealId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Menus', 'mealId', { type: Sequelize.INTEGER });
  },
};
