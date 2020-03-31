const express = require('express');
const Menus = require('../models/menu');
const Client = require('../models/client');

const router = express.Router();

// GET Cart page 
router.get('/', (req, res) => {
	const { currentClient } = req.session;
	res.render('cart', { currentClient });
});

// POST add to cart
router.post('/:id/addToCart', (req, res) => {
	const { currentClient } = req.session;
	const { id } = req.params;




	Client.findById(currentClient._id)
		.then((client) => {
      client.cart.push(id)
      return client.save()
    })
    .then(() => {
      res.redirect('/cart');
    })
		.catch(() => {

		})
})


module.exports = router;