import React, { useEffect, useState } from "react";
import { getAllEvents, deleteEvent } from "../../utilities/events-api";

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
    <div>
      <h1>Events List</h1>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.time}</p>
          <p>{event.details}</p>
          <p>{event.eventDate}</p>
          <p>{event.eventTime}</p>
          <p>{event.eventCategory}</p>
          <button onClick={() => handleDelete(event._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}