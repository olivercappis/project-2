const User = require('./User')
const Connection = require('./Connection')


User.belongsToMany(User, { through: Connection })

module.exports = {
    User,
    Connection
}
