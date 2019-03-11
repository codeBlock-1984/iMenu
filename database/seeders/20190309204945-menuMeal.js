const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MenuMeals', [{
      menuId: 1,
      mealId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      menuId: 1,
      mealId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      menuId: 2,
      mealId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      menuId: 2,
      mealId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      menuId: 2,
      mealId: 3,
      createdAt: now,
      updatedAt: now,
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MenuMeals', null, {});
  },
};
