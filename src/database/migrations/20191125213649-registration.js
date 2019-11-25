module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('registration', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      plan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: Sequelize.DATE,
      price: {
        type: Sequelize.FLOAT,
        default: 0,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }),

  down: queryInterface => queryInterface.dropTable('registration'),
};
