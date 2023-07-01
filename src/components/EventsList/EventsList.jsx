import React, { useEffect, useState } from "react";
import { getAllEvents } from "../../utilities/events-api";

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
        </div>
      ))}
    </div>
  );
}
