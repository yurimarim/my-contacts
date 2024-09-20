const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

// Contacts Endpoints
router.get(
  '/contacts',
  (request, response, next) => {
    request.appId = 'MeuAppID';
    next();
  },
  ContactController.index,
);
router.post('/contacts/', ContactController.store);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.put('/contacts/:id', ContactController.update);

// Categories Endpoints
router.get(
  '/categories',
  (request, response, next) => {
    request.appId = 'MeuAppID';
    next();
  },
  CategoryController.index,
);
router.post('/categories', CategoryController.store);
router.get('/categories/:id', CategoryController.show);
router.delete('/categories/:id', CategoryController.delete);
router.put('/categories/:id', CategoryController.update);

module.exports = router;
