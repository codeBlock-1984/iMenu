const currentDate = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [
      {
        name: 'Potato Porridge',
        price: 3500,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        name: 'Noodles',
        price: 2700,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        name: 'Plantain Chips',
        price: 1900,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {});
  },
};
