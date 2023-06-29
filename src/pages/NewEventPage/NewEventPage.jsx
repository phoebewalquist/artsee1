import { useState, useRef } from 'react';
import './NewEventPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import EventDetail from '../../components/EventDetail/EventDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NewOrderPage({ user, setUser }) {
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  const [createdEvents, setCreatedEvents] = useState([]);

 

  return (
    <main className="NewEventPage">
      <aside>
        <Logo />
     
        <Link to="/events" className="button btn-sm">CREATE EVENT</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <EventDetail />
    </main>
  );
}
