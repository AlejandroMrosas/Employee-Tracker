const { Employee, Engineer, Intern } = require('sequelize');
const sequelize = require('../db/connection');

class Manager extends Sequelize {}

Manager.init(
    {
        name: DataTypes.STRING,
        id: DataTypes.STRING,
        email: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Manager;