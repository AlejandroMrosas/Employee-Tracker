const sequelize = require('sequelize');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '0842001Alex?',
    database: 'employees'
  },
  console.log('Connected to the department database.')
);

module.exports = db;
