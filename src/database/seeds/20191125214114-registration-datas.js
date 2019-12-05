module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'registrations',
      [
        {
          id: 1,
          student_id: 1,
          plan_id: 1,
          start_date: '2019-11-25T16:00:00-03:00',
          end_date: '2019-02-25T16:00:00-03:00',
          price: 125.7,
          created_at: '2019-11-25T16:00:00-03:00',
          updated_at: null,
        },
      ],
      {}
    ),
  down: queryInterface => queryInterface.bulkDelete('registrations', null, {}),
};
