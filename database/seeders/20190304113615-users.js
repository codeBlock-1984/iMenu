// const endecPassword = require('../../utils/endecPassword');

const currentDate = new Date();
// const { encryptPassword } = endecPassword;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Okonkwo',
        email: 'johnokon@example.com',
        password: 'werewolf',
        phone: '08023439584',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        name: 'Aishat Ibrahim',
        email: 'cutebaby97@example.com',
        password: 'dollarbills',
        phone: '08138663849',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        name: 'Lola Wale',
        email: 'lollipops@example.com',
        password: 'sweetestgirl',
        phone: '08093455502',
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};