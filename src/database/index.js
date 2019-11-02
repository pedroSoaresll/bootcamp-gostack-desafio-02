import Sequelize from 'sequelize';

// import models
import User from '../app/models/User';
import Students from '../app/models/Student';

// import database config
import databaseConfig from '../config/database';

// load models
const models = [User, Students];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
