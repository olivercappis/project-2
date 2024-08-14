const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Connection extends Model { }

Connection.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        connected_to_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'connection'
    }

)


module.exports = Connection