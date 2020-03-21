const express = require('express');

const router = express.Router();

// GET Cart page 
router.get('/', (req, res) => {
    const { currentUser } = req.session;
	res.render('cart', { currentUser });
});

// POST Cart page

module.exports = router;