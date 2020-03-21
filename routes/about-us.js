const express = require('express');

const router = express.Router();

// GET About Us page
router.get('/', (req, res) => {
    const { currentChef, currentClient } = req.session;
	res.render('about-us', { currentChef, currentClient });
});

module.exports = router;