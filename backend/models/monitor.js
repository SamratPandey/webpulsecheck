const mongoose = require('mongoose');

const monitorSchema = new mongoose.Schema({
    url: { type: mongoose.Schema.Types.ObjectId, ref: 'Url', required: true },
    status: { type: String, enum: ['up', 'down'], default: 'up' },
    responseTime: { type: Number, default: null }, // in milliseconds
    lastChecked: { type: Date, default: null },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Monitor = mongoose.model('Monitor', monitorSchema);
module.exports = Monitor;