import Sequelize, { Model } from 'sequelize';

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        end_date: Sequelize.DATE,
        price: Sequelize.DOUBLE,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
  }
}
