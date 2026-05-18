const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emoji: { type: String, required: true },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  farmerName: { type: String, required: true },
  pricePerKg: { type: Number, required: true },
  unit: { type: String, default: 'kg' },
  availableQty: { type: Number, required: true },
  category: { type: String, enum: ['all', 'vegetables', 'fruits', 'grains', 'dairy'], required: true },
  isOrganic: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  reviewCount: { type: Number, default: 0 },
  location: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);