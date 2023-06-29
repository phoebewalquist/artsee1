import React, { useState } from 'react';
import * as eventsAPI from '../../utilities/events-api'

const CreateEventPage = () => {
  const [event, setEvent] = useState({ 
    title: '',
    time: '',
    details: '',
    eventDate: '',
    eventTime: '',
    eventCategory: '',
   })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = await eventsAPI.createNewEvent(event)
    setEvent({ 
      title: '',
      time: '',
      details: '',
      eventDate: '',
      eventTime: '',
      eventCategory: '',
     })
  };

  const handleChange = (e) => {
    setEvent({...event, [e.target.name]: e.target.value })
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Event Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={event.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="time">Event Time:</label>
        <input
          type="text"
          name="time"
          id="time"
          value={event.time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="details">Event Details:</label>
        <textarea
          name="details"
          id="details"
          value={event.details}
          onChange={handleChange}
        ></textarea>
      </div>
   
      <div className="input-group">
        <label htmlFor="eventDate">Date:</label>
        <input
          type="date"
          name="eventDate"
          id="eventDate"
          value={event.eventDate}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="eventTime">Time:</label>
        <input
          type="time"
          name="eventTime"
          id="eventTime"
          value={event.eventTime}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="eventCategory">Category:</label>
        <select
          id="eventCategory"
          name="eventCategory"
          value={event.eventCategory}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="Painting">Painting</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Photography">Photography</option>
          <option value="Fashion">Fashion</option>
          <option value="Modern-Art">Modern-Art</option>
          <option value="Videography">Videography</option>
          <option value="Drawings">Drawings</option>
        </select>
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventPage;
