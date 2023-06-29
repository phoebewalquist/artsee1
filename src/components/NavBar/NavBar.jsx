import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav>
            <Link to="/events/new">ALL EVENTS</Link>
            &nbsp; | &nbsp;
            <Link to="/events">CREATE EVENT</Link>
        </nav>
    );
}