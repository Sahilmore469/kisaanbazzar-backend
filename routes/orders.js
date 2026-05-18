const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const { items, deliveryAddress } = req.body;
    if (!items || items.length === 0)
      return res.status(400).json({ message: 'No items in order' });

    const firstProduct = await Product.findById(items[0].productId);
    if (!firstProduct)
      return res.status(404).json({ message: 'Product not found' });

    if (!firstProduct.farmer)
      return res.status(400).json({ message: 'Product has no farmer' });

    const farmer = await User.findById(firstProduct.farmer);
    if (!farmer)
      return res.status(404).json({ message: 'Farmer not found' });

    console.log('✅ Farmer found:', farmer.name, farmer._id);

    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) continue;
      const price = product.pricePerKg ?? product.pricePerUnit ?? 0; // ✅ pricePerKg first
      const subtotal = price * item.quantity;
      totalAmount += subtotal;
      orderItems.push({
        product: product._id,
        produceName: product.name,
        produceEmoji: product.emoji,
        quantity: item.quantity,
        unit: product.unit,
        pricePerKg: price,  // ✅ Fixed: schema uses pricePerKg not pricePerUnit
        subtotal,
      });
      product.availableQty -= item.quantity;
      await product.save();
    }

    const order = await Order.create({
      buyer: req.user._id,
      farmer: farmer._id,
      farmerName: farmer.name,
      items: orderItems,
      totalAmount,
      deliveryAddress: deliveryAddress || '',
    });

    console.log('✅ Order created:', order._id);
    console.log('✅ Order farmer:', order.farmer);

    await User.findByIdAndUpdate(farmer._id, {
      $inc: { totalSales: 1, totalEarnings: totalAmount },
    });

    res.status(201).json(order);
  } catch (e) {
    console.error('❌ Order error:', e.message);
    res.status(500).json({ message: e.message });
  }
});

router.get('/my', auth, async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user._id })
      .populate('items.product')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get('/farmer', auth, async (req, res) => {
  try {
    const farmerIdStr = req.user._id.toString();
    console.log('🔍 Farmer ID looking for orders:', farmerIdStr);

    // ✅ Fetch all then filter with toString() to avoid ObjectId type mismatch
    const allOrders = await Order.find({})
      .populate('items.product')
      .sort({ createdAt: -1 });

    console.log('📦 Total orders in DB:', allOrders.length);
    allOrders.forEach(o => {
      console.log('  Order:', o._id, '| farmer:', o.farmer?.toString(), '| match:', o.farmer?.toString() === farmerIdStr);
    });

    const orders = allOrders.filter(
      (o) => o.farmer && o.farmer.toString() === farmerIdStr
    );

    console.log('✅ Orders found for farmer:', orders.length);
    res.json(orders);
  } catch (e) {
    console.error('❌ Farmer orders error:', e.message);
    res.status(500).json({ message: e.message });
  }
});

router.put('/:id/status', auth, async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, farmer: req.user._id },
      { status: req.body.status },
      { new: true }
    );
    if (!order)
      return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;