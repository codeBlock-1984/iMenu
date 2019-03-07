const currentDate = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        userId: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        userId: 3,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
