// src/index.js
const express = require('express');
const app = express();
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});