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

module.exports = router;


