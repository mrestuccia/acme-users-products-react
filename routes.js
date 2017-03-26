const router = require('express').Router();
const db = require('./db');

const User = db.Models.User;
const Product = db.Models.Product;


// GET /api/products
router.get('/products', (req, res, next) => {
  Product.findAll()
    .then((products) => res.send(products));
});

// GET /api/users
router.get('/users', (req, res, next) => {
  User.findAll()
    .then((products) => res.send(products));
});

// DELETE /api/products/:id
router.get('/products/:id', (req, res, next) => {
  const id = req.params.id;
  Product.destroy({ where: { id: id } })
    .then(() => res.send(200));
});

// POST /api/products
router.post('/products', (req, res, next) => {
  const name = req.body.name;
  Product.create({ name: name })
    .then(() => res.send(200));
});


module.exports = router;
