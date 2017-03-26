const conn = require('./conn');
const User = require('./user');
const Product = require('./product');


// Sync the DB
const sync = () => {
  return conn.sync({ force: true });
};

// Seed the DB
const seed = () => {
  return conn.sync()
    .then(() => {
      return Promise.all([
        User.create({ name: 'curly' }),
        User.create({ name: 'larry' }),
        User.create({ name: 'moe' })
      ]);
    })
    .then(() => {
      return Promise.all([
        Product.create({ name: 'bar' }),
        Product.create({ name: 'bazz' }),
        Product.create({ name: 'foo' })
      ]);
    });
};



module.exports = {
  sync,
  seed,
  Models: {
    User,
    Product
  }
};
