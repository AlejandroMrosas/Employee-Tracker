const Sequelize = require('sequelize');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '0842001Alex?',
    database: 'department'
  },
  console.log('Connected to the department database.')
);

module.exports = sequelize;
