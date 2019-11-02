import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.STRING,
        weight: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
      },
      {
        sequelize,
        timestamps: true,
      }
    );

    return this;
  }
}

export default Student;
