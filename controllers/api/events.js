const Event = require('../../models/Event');

const createEvent = async (req, res) => {
  try {
    const { title, time, details, eventDate, eventTime, eventCategory } = req.body;
    console.log(req.body);
    const event = new Event({
      title,
      time,
      details,
      eventDate,
      eventTime,
      eventCategory,
      createdBy: req.user._id,
    });

    await event.save();

    res.status(201).json({ message: 'Event created!', event });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
};

module.exports = {
  createEvent,
};
