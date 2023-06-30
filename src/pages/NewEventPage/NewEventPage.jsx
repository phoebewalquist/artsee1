import { useState, useEffect } from 'react';
import './NewEventPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import EventDetail from '../../components/EventDetail/EventDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { getAllEvents } from '../../utilities/events-api';


export default function NewEventPage({ user, setUser }) {
  const [createdEvents, setCreatedEvents] = useState([]);

 

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const events = await getAllEvents(); 
      setCreatedEvents(events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <main className="NewEventPage">
      <aside>
        <Logo />
        <Link to="/events" className="button btn-sm">
          CREATE EVENT
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <EventDetail events={createdEvents} /> 
    </main>
  );
}
