const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');
const db = require('./db');

const app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server listening on ${port}`));

db.seed()
  .then(() => console.log(`DB seeded`))