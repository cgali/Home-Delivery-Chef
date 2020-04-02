const express = require('express');
const Menus = require('../models/menu');
const Client = require('../models/client');

const router = express.Router();

// POST delete cart items
router.post('/:id/deleteAll', (req, res) => {
	const { currentClient } = req.session;
  
	Client.findById(currentClient._id)
		.then((client) => {
      console.log(client)
      client.cart.name.deleteOne()
      client.save()
    })
    .then(() => {
      res.redirect(`/cart/${currentClient._id}`)
    })
		.catch(() => {
		})
})

// GET Cart page 
router.get('/:id', (req, res) => {
  const { currentClient } = req.session;
  const { id } = req.params;
  console.log(id)
  Client.findById(id)
    .then(client => {
      req.session.currentClient = client;
      console.log('SESION GET: ', req.session.currentClient)
      res.render('cart', { currentClient });
    })
});

// POST add to cart
router.post('/:id/addToCart', (req, res) => {
	const { currentClient } = req.session;
  const { id } = req.params;
  // console.log('THE ID IS: ', id)

	Client.findById(currentClient._id)
		.then((client) => {
      Menus.find({ _id:id })
      .then (menu => {
        // console.log('CLIENT: ', client)
        // console.log(menu)
        client.cart.image.push(menu[0].starter.image)
        client.cart.name.push(menu[0].title)
        client.cart.price.push(menu[0].price)
        client.save()
        .then((client) => {
          req.session.currentClient = client;
          console.log('SESION POST: ', req.session.currentClient)
          res.redirect(`/cart/${currentClient._id}`)
        })
      })
    })
		.catch(() => {
		})
})



module.exports = router;