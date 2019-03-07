const currentDate = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MenuDetails', [
      {
        mealId: 1,
        menuId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 2,
        menuId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 3,
        menuId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 1,
        menuId: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 2,
        menuId: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 3,
        menuId: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 1,
        menuId: 3,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 2,
        menuId: 3,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        mealId: 3,
        menuId: 3,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MenuDetails', null, {});
  },
};
