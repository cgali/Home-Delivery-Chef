const express = require('express');
const router = express.Router();

const Chefs = require('../models/chef');

/* GET /chefs page. */
router.get('/', (req, res) => {
  Chefs.find()
  .then(chefs => {
    res.render('chefs', { chefs });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
  console.log('listing chefs');
});

module.exports = router;