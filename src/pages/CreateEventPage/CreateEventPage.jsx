import { useState } from "react";

export default function CreateEventPage() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Perform any necessary actions with the input value
    // For example, you can update state or send it to a backend server
  };

  return (
    <div className="full-screen-container">
      <div className="create-event-container">
        <h3 className="create-event-title">Create an Event</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="eventTitle">Event Title:</label>
            <input
              type="text"
              id="eventTitle"
              value={inputValue}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="eventDate">Date:</label>
            <input type="date" id="eventDate" />
          </div>

          <div className="input-group">
            <label htmlFor="eventTime">Time:</label>
            <input type="time" id="eventTime" />
          </div>

          <div className="input-group">
            <label htmlFor="eventCategory">Category:</label>
            <select id="eventCategory">
              <option value="">Select a category</option>
              <option value="Painting">Painting</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Photography">Photography</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="eventDescription">Description:</label>
            <textarea id="eventDescription"></textarea>
          </div>

          <button type="submit" className="create-event-button">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
