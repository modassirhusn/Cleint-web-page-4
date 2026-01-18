const mongoose = require('mongoose');

const wineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: String, required: true },
    region: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true } // e.g., 'featured'
}, { timestamps: true });

module.exports = mongoose.model('Wine', wineSchema);
