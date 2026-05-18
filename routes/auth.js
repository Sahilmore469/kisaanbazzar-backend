const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

router.post('/register', async (req, res) => {
  try {
    const { name, phone, password, role, location, emoji, farmName } = req.body;
    if (await User.findOne({ phone }))
      return res.status(400).json({ message: 'Phone already registered' });
    const user = await User.create({ name, phone, password, role, location, emoji, farmName });
    res.status(201).json({
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, phone: user.phone, role: user.role, emoji: user.emoji, location: user.location, farmName: user.farmName }
    });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid phone or password' });
    res.json({
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, phone: user.phone, role: user.role, emoji: user.emoji, location: user.location, farmName: user.farmName, totalSales: user.totalSales, totalEarnings: user.totalEarnings, activeListings: user.activeListings, rating: user.rating }
    });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.get('/profile', auth, async (req, res) => { res.json(req.user); });

module.exports = router;