const express = require('express');
const app = express();
const sequelize = require('./config/db');
const apiRoutes = require('./routes/api');
const User = require('./models/User');
const FoodItem = require('./models/FoodItem');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});