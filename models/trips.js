const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DateType.number,
            allowNull: false,
            unique: false,
        },
        traveller_amount: {
            type: DateType.number,
            allowNull: false,
            unique: false,
        },
    },
    
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',

    }
);

module.exports = Trips;