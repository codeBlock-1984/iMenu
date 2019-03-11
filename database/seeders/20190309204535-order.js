const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      orderDate: '2019-03-01',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderDate: '2019-03-02',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderDate: '2019-03-02',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderDate: '2019-03-03',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      orderDate: '2019-03-04',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
