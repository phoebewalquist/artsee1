import React, { useEffect, useState } from "react";
import { getAllEvents, deleteEvent } from "../../utilities/events-api";
import { Link } from "react-router-dom";
import "./EventsList.css";
import { getUser } from "../../utilities/users-service";

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const user = getUser();

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
      const newEvents = events.filter((event) => event._id !== eventId);
      setEvents(newEvents);
      console.log("Event deleted successfully.");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  // Group events into rows of 3
  const eventsRows = events.reduce((rows, event, index) => {
    if (index % 3 === 0) {
      rows.push([]);
    }
    rows[Math.floor(index / 3)].push(event);
    return rows;
  }, []);

  return (
    <div className="EventsList">
      <h1>Events List</h1>
      {eventsRows.map((row, rowIndex) => (
        <div className="eventRow" key={rowIndex}>
          {row.map((event) => (
            <div className="event" key={event._id}>
              <h3>{event.title}</h3>
              <Link to={`/events/${event._id}/details`}>
                <button className="details-button">DETAILS</button>
              </Link>
              {user && user._id === event.createdBy && (
                <button onClick={() => handleDelete(event._id)}>DELETE</button>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
