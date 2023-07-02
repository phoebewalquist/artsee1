import React, { useState } from "react";
import { createNewEvent } from "../../utilities/events-api";
import { useNavigate } from "react-router-dom";

function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    eventDate: "",
    eventTime: "",
    eventCategory: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdEvent = await createNewEvent(formData);
      console.log("Event created:", createdEvent);
      navigate('/events')
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Event Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />



      <label htmlFor="details">Event Details:</label>
      <textarea
        name="details"
        value={formData.details}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="eventDate">Date:</label>
      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
      />

      <label htmlFor="eventTime">Time:</label>
      <input
        type="time"
        name="eventTime"
        value={formData.eventTime}
        onChange={handleChange}
      />

      <label htmlFor="eventCategory">Category:</label>
      <select
        name="eventCategory"
        value={formData.eventCategory}
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

      <button type="submit">Create Event</button>
    </form>
  );
}

export default CreateEventForm;
