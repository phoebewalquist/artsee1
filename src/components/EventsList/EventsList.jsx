import React, { useEffect, useState } from "react";
import { getAllEvents, deleteEvent } from "../../utilities/events-api";
import {Link} from "react-router-dom"
import "./EventsList.css"; 
export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (eventId) => {
    try {
      await deleteEvent(eventId);
      const newEvents = [...events];
      const newEventsFiltered = newEvents.filter((event) => event._id !== eventId);
      setEvents(newEventsFiltered);
      console.log("Event deleted successfully.");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <form className="EventsList">
      <h1>Events List</h1>
      {events.map((event) => (
        <div className="event" key={event._id}>
          <h3>{event.title}</h3>
         <Link to={`/events/${event._id}/details`} ><button className="details-button">DETAILS</button></Link>
          <button onClick={() => handleDelete(event._id)}>DELETE</button>
        </div>
      ))}
    </form>
  );
}