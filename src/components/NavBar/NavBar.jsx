import { Link } from 'react-router-dom';
export default function NavBar() {

    
    return (
        <nav>
            <Link to="/events">ALL EVENTS</Link>
            &nbsp; | &nbsp;
            <Link to="/events/new">CREATE EVENT</Link>
            &nbsp; | &nbsp;
            <Link to="/login">LOG OUT</Link>
            {/* make login nav */}
        </nav>
    );
}