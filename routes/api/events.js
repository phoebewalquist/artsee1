const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');

router.post('/', async (req, res) => {
  try {
    const { title, time, details, eventDate, eventTime, eventCategory } = req.body;

    const event = new Event({
      title,
      time,
      details,
      eventDate,
      eventTime,
      eventCategory,
    });

   
    await event.save();

    res.status(201).json({ message: 'shit works?' });
  } catch (error) {
    res.status(500).json({ error: 'there is a problem' });
  }
});

module.exports = router;