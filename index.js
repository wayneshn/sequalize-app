const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root@3.138.199.83:2881/app');

async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

test();
