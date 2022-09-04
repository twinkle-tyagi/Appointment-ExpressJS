const Sequelize = require('sequelize');

const sequelize = require('../Util/database');

const Users = sequelize.define('user1', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Users;