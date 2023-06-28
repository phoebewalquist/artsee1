import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav>
            <Link to="/orders/new">ALL EVENTS</Link>
            &nbsp; | &nbsp;
            <Link to="/orders">CREATE EVENT</Link>
        </nav>
    );
}