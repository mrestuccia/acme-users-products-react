const sequelize = require('sequelize');

const conn = new sequelize(process.env.DATABASE_URL);

module.exports = conn;