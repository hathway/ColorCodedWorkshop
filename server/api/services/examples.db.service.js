const Sequelize = require('sequelize');
const PersonModel = require('../models/person');

const sequelize = new Sequelize('colorcodeddb', 'testuser', 'test1234', {
  host: 'colorcodedworkshop.ccwzufwojjut.us-west-1.rds.amazonaws.com',
  dialect: 'mysql',
});

const Person = PersonModel(sequelize, Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  });

class ExamplesDatabase {
  all() {
    return Person.findAll();
  }

  byId(id) {
    return Person.findOne({ where: { id } });
  }

  insert(object) {
    return Person.create(object);
  }
}

export default new ExamplesDatabase();
