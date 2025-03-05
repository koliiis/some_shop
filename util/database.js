const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Homaterminator27', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;
