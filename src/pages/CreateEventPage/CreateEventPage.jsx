import React, { Component } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./CreateEventPage.css";
class CreateEventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      time: "",
      details: "",
      eventDate: "",
      eventTime: "",
      eventCategory: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = await eventsAPI.createNewEvent(this.state);
    this.setState({
      title: "",
      time: "",
      details: "",
      eventDate: "",
      eventTime: "",
      eventCategory: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    const {
      title,
      time,
      details,
      eventDate,
      eventTime,
      eventCategory,
    } = this.state;

    return (
      <div className="form-container">
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Event Time:</label>
          <input
            type="text"
            name="time"
            id="time"
            value={time}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="details">Event Details:</label>
          <textarea
            name="details"
            id="details"
            value={details}
            onChange={this.handleChange}
          ></textarea>
        </div>

        <div className="input-group">
          <label htmlFor="eventDate">Date:</label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            value={eventDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="eventTime">Time:</label>
          <input
            type="time"
            name="eventTime"
            id="eventTime"
            value={eventTime}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="eventCategory">Category:</label>
          <select
            id="eventCategory"
            name="eventCategory"
            value={eventCategory}
            onChange={this.handleChange}
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
        <button type="submit" onChange={this.handleChange}>
          Create Event
        </button>
      </form>
      </div>
    );
  }
}

export default CreateEventPage;
