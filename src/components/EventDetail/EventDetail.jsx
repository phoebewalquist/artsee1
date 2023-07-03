import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";
import "./EventDetail.css";

export default function EventDetail() {
  const [event, setEvent] = useState({});
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventCategory, setEventCategory] = useState("");

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    async function getEventDetails() {
      try {
        const details = await eventsAPI.getEventDetails(id);
        setEvent(details);
        setTitle(details.title);
        setTime(details.time);
        setDetails(details.details);
        setEventDate(details.eventDate);
        setEventTime(details.eventTime);
        setEventCategory(details.eventCategory);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    }

    getEventDetails();
  }, [id]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const updatedEvent = {
        title,
        time,
        details,
        eventDate,
        eventTime,
        eventCategory,
      };

      const updatedEventResponse = await eventsAPI.updateEvent(
        id,
        updatedEvent
      );
      console.log("Event updated:", updatedEventResponse);

      setEvent(updatedEventResponse);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <form className="EventDetail" onSubmit={handleSubmit}>
      <h3>{event.title}</h3>
      <p>{event.details}</p>
      <p>{event.eventDate}</p>
      <p>{event.eventTime}</p>
      <p>{event.eventCategory}</p>
      
       <div class="line"></div>
        <h3 className="editEventTitle">EDIT EVENT:</h3>
        
        <p>edit title:</p>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
       
        <p>edit details:</p>
        <textarea
          type="text"
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>

        <button type="submit">Update Event</button>
   
    </form>
  );
}
