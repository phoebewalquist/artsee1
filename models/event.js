const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;