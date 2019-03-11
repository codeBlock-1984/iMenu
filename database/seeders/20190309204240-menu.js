const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      menuDate: '2019-03-01',
      createdAt: now,
      updatedAt: now,
    },
    {
      menuDate: '2019-03-02',
      createdAt: now,
      updatedAt: now,
    },
    {
      menuDate: '2019-03-03',
      createdAt: now,
      updatedAt: now,
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  },
};
