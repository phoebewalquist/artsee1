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

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: 'failed to get events' });
  }
};

const getEventById = async (req, res) => {
  try {
    const eventId = req.params._id;
    const event = await Event.findById(eventId);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    console.error('error finding event', error);
    res.status(500).json({ error: 'failed to get event' })
  }
}

const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.status(200).json('Success');
  } catch (error) {
    console.error('Error deleting event', error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
};


module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
};