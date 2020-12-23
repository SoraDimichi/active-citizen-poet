const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');

const versesRouter = require('./routes/verses');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/citizendb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  req.user = {
    _id: '5fd382012e52383660dcb664',
  };
  next();
});

app.use('/', versesRouter);
app.use('/', usersRouter);
app.use('/', eventsRouter);

app.use('*', (req, res) => res.status(404)
  .send({ message: 'Запрашиваемый ресурс не найден' }));

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
/* eslint-disable no-console */
