const express = require('express');
const Chefs   = require('../models/chef');
const Menus = require('../models/menu');

const router = express.Router();

// GET /chefs page.
router.get('/', (req, res) => {
  const { currentChef, currentClient } = req.session;
  Chefs.find()
  .then(chefs => {
    console.log('listing chefs');
    res.render('chefs', { chefs, currentChef, currentClient });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
});

// GET /chefs/:id page. 
router.get('/:id', (req, res) => {
  const { currentChef, currentClient } = req.session;
  const { id } = req.params;
  let foundChef;
  Chefs.findById(id)
  .then(chef => {
    console.log('Rendering ONE chef');
    foundChef = chef;
    console.log(chef);
    return Menus.find({ chef_id:id })
  }).then(menus => {
    console.log(menus);
    res.render('chefprofile', { foundChef, menus, currentChef, currentClient });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
});

router.get('/:id', (req, res) => {
  const { currentChef, currentClient } = req.session;
  const { id } = req.params;
  Chefs.findById(id)
   .then(foundChef => {
    console.log('Rendering ONE chef');
    res.render('chefprofile', { foundChef, currentChef, currentClient });
  })
  .catch(err => console.log('Error while listing chefs: ', err));
});

// GET /chefs/:id/update
router.get('/:id/updatechef', (req, res, next) => {
  const { currentChef } = req.session;
  const { id } = req.params;
  Chefs.findById(id)
  .then(chefInfo => {
      res.render('updatechef', { chefInfo, currentChef })
  })
  .catch(next);    
})

// POST /chefs/:id/update
router.post('/:id', (req, res) => {
  const { id } = req.params;
  console.log('THIS IS THE ID: ',id)
  const { name, surname, image, yearsOfExperience, languages, email } = req.body;
  console.log(req.query)
  Chefs.findByIdAndUpdate(id, {
      name,
      surname,
      image,
      yearsOfExperience,
      languages: languages.split(','),
      email,
  })
  .then(() => {
      res.redirect(`/chefs/${id}`);
  })
})

module.exports = router;