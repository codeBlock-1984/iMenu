const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [{
      name: 'Fish & Chips',
      price: '1600',
      imageUrl: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Fried Rice',
      price: '2300',
      imageUrl: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Pepperoni Pizza',
      price: '4500',
      imageUrl: null,
      createdAt: now,
      updatedAt: now,
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {});
  },
};
