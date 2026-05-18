const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['buyer', 'farmer'], required: true },
  emoji: { type: String, default: '👤' },
  location: { type: String, default: '' },
  // Farmer-specific
  farmName: { type: String },
  totalSales: { type: Number, default: 0 },
  totalEarnings: { type: Number, default: 0 },
  activeListings: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);