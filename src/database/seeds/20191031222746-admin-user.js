const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Administrador',
        email: 'admin@gympoint.com',
        password_hash: bcrypt.hashSync('123456', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  ),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
