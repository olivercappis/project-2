const User = require('./User')
const Connection = require('./Connection')


User.belongsToMany(User, { through: Connection, as: 'user' })

module.exports = {
    User,
    Connection
}
