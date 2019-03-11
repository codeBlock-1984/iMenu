const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Free Spirit',
      email: 'codeblock@iceony.com',
      password: '$2b$10$xZUjIm0lJhNRYwQQieSHJO7qoPLfBx4jM1mHcWo04CLAWK0UEzDoO',
      phone: '09043342348',
      isAdmin: true,
      createdAt: now,
      updatedAt: now,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
