import './EventList.css';

export default function EventList({ categories, activeEvent, setActiveEvent }) {
  const evnts = categories.map(evnt =>
    <li
      key={evnt}
      className={evnt === activeEvent ? 'active' : ''}
      onClick={() => setActiveEvent(evnt)}
    >
      {evnt}
    </li>
  );
  return (
    <ul className="EventList">
      {evnts}
    </ul>
  );
}
