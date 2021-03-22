const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Travellers extends Model {}

Travellers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DateType.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DateType.STRING,
            allowNull: false,
            unique: true,
        },
    },
    
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traveller',

    }
);

module.exports = Travellers;