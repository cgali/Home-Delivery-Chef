const express = require('express');

const router = express.Router();

// GET About Us page
router.get('/', (req, res) => {
    const { currentUser } = req.session;
	res.render('about-us', { currentUser });
});

module.exports = router;