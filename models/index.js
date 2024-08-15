const User = require('./User')
const Connection = require('./Connection')


User.belongsToMany(User, { through: Connection, as: 'user', foreignKey: 'user_id', otherKey: 'connected_to_id' })

module.exports = {
    User,
    Connection
}
