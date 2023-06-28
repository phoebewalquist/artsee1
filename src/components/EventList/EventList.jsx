import React from 'react';
import './EventList.css';

export default function EventList({ categories, activeEvent, setActiveEvent, createdEvents }) {
  const evnts = categories.map((evnt) => (
    <li
      key={evnt}
      className={evnt === activeEvent ? 'active' : ''}
      onClick={() => setActiveEvent(evnt)}
    >
      {evnt}
    </li>
  ));

  const renderedEvents = createdEvents.map((event) => (
    <li key={event.eventId}>
      {event.eventTitle} - {event.eventDate} - {event.eventTime}
    </li>
  ));

  return (
    <ul className="EventList">
      {renderedEvents}
      {evnts}
    </ul>
  );
}
