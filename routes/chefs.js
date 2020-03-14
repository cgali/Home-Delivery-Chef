const express = require('express');
const router = express.Router();

const Chefs = require('../models/chef');

/* GET /chefs page. */
router.get('/', (req, res) => {
  Chefs.find()
  .then(chefs => {
    console.log('listing chefs');
    res.render('chefs', { chefs });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
});

/* GET /chefs/:id page. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Chefs.findById(id)
  .then(foundChef => {
    console.log('Rendering ONE chef');
    res.render('chefprofile', { foundChef });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
});

module.exports = router;