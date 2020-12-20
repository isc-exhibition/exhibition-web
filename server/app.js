const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const assignmentsRoutes = require('./routes/assignment');
const subjectsRoutes = require('./routes/subject');
const eventsRoutes = require('./routes/event');

const app = express();

app.use(bodyParser.json());
app.use('/api/v1/assignment', assignmentsRoutes);
app.use('/api/v1/subject', subjectsRoutes);
app.use('/api/v1/event', eventsRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || '서버에서 에러가 발생했습니다' });
});

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.error(err);
  });
