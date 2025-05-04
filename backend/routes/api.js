const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const roleCheck = require('../middlewares/auth');

// Middleware to extract user from token
router.use(async (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    try {
      const decoded = jwt.verify(auth.split(" ")[1], 'secretkey');
      req.user = decoded;
    } catch {}
  }
  next();
});

// Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hash });
  res.status(201).json(user);
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey');
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

// Public menu route
router.get('/menu', async (req, res) => {
  const items = await FoodItem.findAll();
  res.json(items);
});

// Admin add food item
router.post('/menu', roleCheck('admin'), async (req, res) => {
  const item = await FoodItem.create(req.body);
  res.status(201).json(item);
});

module.exports = router;