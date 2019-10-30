import Sequelize from 'sequelize';

// import models
// import database config

// load models
const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(/* database config */);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
