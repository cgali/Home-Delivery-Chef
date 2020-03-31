const express = require('express');
const Menus = require('../models/menu');
const Client = require('../models/client');

const router = express.Router();

// GET Cart page 
router.get('/', (req, res) => {
	const { currentUser } = req.session;
	res.render('cart', { currentUser });
});

// POST add to cart
router.post('/:id/addToCart', (req, res) => {
	const { currentUser } = req.session;
	const { id } = req.params;
	const {
		menu, 
	} = req.body;
	Client.update({
		menu,
	})
})


module.exports = router;