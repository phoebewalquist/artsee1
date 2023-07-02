import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav>
            <Link to="/events">ALL EVENTS</Link>
            &nbsp; | &nbsp;
            <Link to="/events/new">CREATE EVENT</Link>
            {/* make login nav */}
        </nav>
    );
}