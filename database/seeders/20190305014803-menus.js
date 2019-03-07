const currentDate = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [
      {
        menuDate: '2019-03-01',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        menuDate: '2019-03-02',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        menuDate: '2019-03-03',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  },
};
