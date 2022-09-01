const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;