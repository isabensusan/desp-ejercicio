const express = require ('express');
const router = express.Router();
const Hotel = require('../models/hotels');


router.get('/hotels', (req, res, next) => {
    Hotel.find()
      .then(data => res.json(data))
      .catch(next)
});

// este endpoint se uso para cargar los datos de json de manera rapida y prolija
router.post('/hotels/add', (req, res, next) => {
   const name = req.body.name;
   const rating = Number(req.body.rating);
   const recommended = req.body.recommended;
   const stars = Number(req.body.stars);
   const discount = req.body.discount;
   const price = req.body.price;
   const amenities = req.body.amenities;
   const features = req.body.features;

   const newHotel = new Hotel({
    name,
    rating,
    recommended,
    stars,
    discount,
    price,
    amenities,
    features
   });

  newHotel.save()
  .then(() => res.json('Hotel Added!'))
  .catch(err => res.status(400).json('Error ' + err))

})

// Room.find({
//     type: req.body.roomType,
//     beds: req.body.beds,
//     max_occupancy: {$gt: req.body.guests},
//     cost_per_night: {$gte: req.body.priceRange.lower, $lte: req.body.priceRange.upper},
//     reserved: { 

//         //Check if any of the dates the room has been reserved for overlap with the requsted dates
//         $not: {
//             $elemMatch: {from: {$lt: req.body.to.substring(0,10)}, to: {$gt: req.body.from.substring(0,10)}}
//         }

//     }
// }, function(err, rooms){
//     if(err){
//         res.send(err);
//     } else {
//         res.json(rooms);
//     }
// });

  

module.exports = router;


