const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    // FIXED: show products where isActive is not explicitly false
    let query = { isActive: { $ne: false } };
    if (category && category !== 'all') query.category = category;
    if (search) query.$or = [{ name: { $regex: search, $options: 'i' } }, { farmerName: { $regex: search, $options: 'i' } }];
    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.get('/farmer/my', auth, async (req, res) => {
  try {
    const products = await Product.find({ farmer: req.user._id });
    res.json(products);
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'farmer') return res.status(403).json({ message: 'Only farmers can add products' });
    const product = await Product.create({ ...req.body, farmer: req.user._id, farmerName: req.user.name, location: req.user.location });
    res.status(201).json(product);
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: req.params.id, farmer: req.user._id }, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id, farmer: req.user._id });
    res.json({ message: 'Product deleted' });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

module.exports = router;