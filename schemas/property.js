const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// // create geolocation schema
// const GeoSchema = new Schema({
//     type: {
//         type: String,
//         default: 'Point'
//     },
//     coordinates: {
//         type: [Number],
//         index: '2dsphere'
//     }
// });

// // create property schema
// const PropertySchema = new Schema({
//     name: {
//         type: String,
//         required: [true, 'Name field is required']
//     },
//     rank: {
//         type: String
//     },
//     available: {
//         type: Boolean,
//         default: false
//     },
//     geometry: GeoSchema
// });

const PropertySchema = new Schema({
    name: String,
    age: Number
});

const Property = mongoose.model('property', PropertySchema);

module.exports = Property;
