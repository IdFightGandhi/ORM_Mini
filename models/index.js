const Travellers = require('./traveller');
const Location = require('./location');
const Trips = require('./trips');


Travellers.belongsToMany(Location, {
    through: {
        model: Trips,
        unique: false
    },
    as: 'planned_trips'
});

Location.belongsToMany(Travellers, {
    through:{
        model: Trips,
        unique: false
    },
    as: 'location_travellers'
});


module.exports = {Travellers, Location, Trips};

