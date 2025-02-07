const mongoose = require('mongoose');

const BazaarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String, default: 'placeholder.jpg' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bazaar', BazaarSchema);