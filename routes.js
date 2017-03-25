const router = require('express').Router();

// GET /api/products
router.get('/products', (req, res, next) => {
  res.status(200);
});

// GET /api/users
router.get('/users', (req, res, next) => {
  res.status(200);
});

// DELETE /api/products/:id
router.get('/products/:id', (req, res, next) => {
  res.status(200);
});

// POST /api/products
router.post('/products', (req, res, next) => {
  res.status(200);
});


module.exports = router;
