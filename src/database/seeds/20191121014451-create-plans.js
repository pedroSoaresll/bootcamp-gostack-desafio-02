module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'plans',
      [
        {
          name: 'Start',
          duration: 1,
          price: 129.0,
          created_at: new Date(),
          updated_at: null,
        },
        {
          name: 'Gold',
          duration: 3,
          price: 109.0,
          created_at: new Date(),
          updated_at: null,
        },
        {
          name: 'Diamond',
          duration: 6,
          price: 89.0,
          created_at: new Date(),
          updated_at: null,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('plans', null, {});
  },
};
