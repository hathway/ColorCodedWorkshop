module.exports = (sequelize, type) => sequelize.define('person', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: type.STRING,
    allowNull: false,
  },
  firstName: type.STRING,
  lastName: type.STRING,
  age: type.INTEGER,
});
