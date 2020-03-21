const express = require('express');
const Chefs   = require('../models/chef');

const router = express.Router();

// GET /chefs page.
router.get('/', (req, res) => {
  const { currentUser } = req.session;
  Chefs.find()
  .then(chefs => {
    console.log('listing chefs');
    res.render('chefs', { chefs, currentUser });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
});

// GET /chefs/:id page. 
router.get('/:id', (req, res) => {
  const { currentUser } = req.session;
  const { id } = req.params;
  Chefs.findById(id)
  .then(foundChef => {
    console.log('Rendering ONE chef');
    res.render('chefprofile', { foundChef, currentUser });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
});

// GET /chefs/:id/update
router.get('/:id/updatechef', (req, res, next) => {
  const { id } = req.params;
  Chefs.findById(id)
  .then(chefInfo => {
      res.render('updatechef', { chefInfo })
  })
  .catch(next);    
})

// POST /chefs/:id/update
router.post('/:id/', (req, res) => {
  const { id } = req.params;
  console.log('THIS IS THE ID: ',id)
  const { name, surname, image, yearsOfExperience, languages, email } = req.body;
  console.log(req.query)
  Chefs.findByIdAndUpdate(id, {
      name,
      surname,
      image,
      yearsOfExperience,
      languages,
      email,
  })
  .then(() => {
      res.redirect(`/chefs/${id}`);
  })
})

module.exports = router;