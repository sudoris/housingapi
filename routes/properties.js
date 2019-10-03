const express = require ('express');
const router = express.Router();
const Property = require('../schemas/property');

// get a list of property from the db
router.get('/', (req, res, next) => {
    Property.find({}).then(properties => {
      res.send(properties);
    });
    // Property.geoNear(
    //     {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 100000, spherical: true}
    // ).then(function(properties){
    //     res.send(properties);
    // }).catch(next);
});

// add a new property to the db
router.post('/', (req, res, next) => {
  Property.create(req.body).then(property => {
        res.send(property);
    }).catch(next);
});

// update a property in the db
router.put('/:id', (req, res, next) => {
  Property.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Property.findOne({_id: req.params.id}).then(property => {
            res.send(property);
        });
    }).catch(next);
});

// delete a property from the db
router.delete('/:id', (req, res, next) => {
    Property.findByIdAndRemove({_id: req.params.id}).then(property => {
        res.send(property);
    }).catch(next);
});

module.exports = router;
