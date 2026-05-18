const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  farmerName: { type: String, required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    produceName: String,
    produceEmoji: String,
    quantity: Number,
    unit: String,
    pricePerKg: Number,
    subtotal: Number,
  }],
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'inTransit', 'delivered', 'cancelled'], 
    default: 'pending' 
  },
  deliveryNote: { type: String },
  deliveryAddress: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);