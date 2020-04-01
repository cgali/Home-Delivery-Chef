const express = require('express');
const Menus = require('../models/menu');
const Client = require('../models/client');

const router = express.Router();

// POST delete to cart
router.post('/:id/deleteAll', (req, res) => {
	const { currentClient } = req.session;
  const { id } = req.params;
  
	Client.findById(currentClient._id)
		.then((client) => {
      client.cart.deleteOne()
      client.save()
    })
    .then(() => {
      res.redirect(`/cart/${id}`)
    })
		.catch(() => {

		})
})

// GET Cart page 
router.get('/:id', (req, res) => {
  const { currentClient } = req.session;
  const { id } = req.params;
  console.log(id)
  Menus.findById(id)
  .then ((menus) => {
    console.log(menus)
    res.render('cart', { currentClient, menus });
  })
	
});

// POST add to cart
router.post('/:id/addToCart', (req, res) => {
	const { currentClient } = req.session;
  const { id } = req.params;
  
	Client.findById(currentClient._id)
		.then((client) => {
      client.cart.push(id)
      client.save()
    })
    .then(() => {
      res.redirect(`/cart/${id}`)
    })
		.catch(() => {

		})
})



module.exports = router;