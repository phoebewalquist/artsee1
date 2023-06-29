const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');

router.post('/', async (req, res) => {
  console.log('hi')
  try {
    const { title, time, details, category } = req.body;

    const event = new Event({
      title,
      time,
      details,
      category,
    });

   
    await event.save();

    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

module.exports = router;