const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  username: { type: String, required: true },
  status: { type: String, required: true }, 
  timestamp: { type: Date, default: Date.now },
  location: { type: String }, 
});

module.exports = mongoose.model('Report', reportSchema);
