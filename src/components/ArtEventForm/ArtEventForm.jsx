import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ArtEventForm = ({ handleEventCreation }) => {
  const history = useHistory();

  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const eventData = {
      eventTitle,
      eventDate,
      eventTime,
      eventCategory,
      eventDescription,
    };

    // Call the handleEventCreation function with the event data
    handleEventCreation(eventData);

    // Reset form values
    setEventTitle('');
    setEventDate('');
    setEventTime('');
    setEventCategory('');
    setEventDescription('');

    history.push('/orders');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="eventTitle">Event Title:</label>
      <input
        type="text"
        id="eventTitle"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />

      <label htmlFor="eventDate">Date:</label>
      <input
        type="date"
        id="eventDate"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />

      <label htmlFor="eventTime">Time:</label>
      <input
        type="time"
        id="eventTime"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
      />

      <label htmlFor="eventCategory">Category:</label>
      <select
        id="eventCategory"
        value={eventCategory}
        onChange={(e) => setEventCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        <option value="Painting">Painting</option>
        <option value="Sculpture">Sculpture</option>
        <option value="Photography">Photography</option>
        {/* Add more options as needed */}
      </select>

      <label htmlFor="eventDescription">Description:</label>
      <textarea
        id="eventDescription"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ArtEventForm;
