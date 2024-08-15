const seedUsers = require('./User-seeds')
const seedConnections = require('./Connection-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: false })
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers()
    console.log('\n----- USERS SEEDED -----\n');

    await seedConnections()
    console.log('\n----- CONNECTIONS SEEDED -----\n');

    process.exit(0)
}

seedAll()