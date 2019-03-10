const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderMeals', [{
      orderId: 1,
      mealId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderId: 1,
      mealId: 3,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderId: 2,
      mealId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderId: 2,
      mealId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderId: 2,
      mealId: 3,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderId: 3,
      mealId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderId: 3,
      mealId: 2,
      createdAt: now,
      updatedAt: now,
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderMeals', null, {});
  },
};
