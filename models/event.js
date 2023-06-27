const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  sortEvent: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
