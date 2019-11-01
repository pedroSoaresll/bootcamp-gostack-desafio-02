import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.STRING,
        weight: Sequelize.FLOAT(3, 2),
        height: Sequelize.FLOAT(1, 2),
      },
      sequelize
    );

    return this;
  }
}

export default new Student();
