import Sequelize from 'sequelize';

// import models
import User from '../app/models/User';

// import database config
import databaseConfig from '../config/database';

// load models
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
