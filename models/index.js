
const { Sequelize } = require('sequelize');
const UserModel = require('./user');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const User = UserModel(sequelize);

module.exports = {
  sequelize,
  User
}; 

