import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useLocation } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  const location = useLocation();

  const activeLinkClass = function (path) {
    if (location.pathname === path) {
      return 'active';
    } else if (location.pathname.slice(0, 12) === path) {
      return 'active';
    } else if (location.pathname.slice(0, 7) === path) {
      return 'active';
    } else {
      return '';
    }
  };

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <div className="navContainer">
        <div className="navLogo" id="navLogo">
          ARTSSEE
        </div>

        {/* <div className="welcomeUser">Welcome, {user ? user.name : ""}!</div> */}

        <div className="navLinks">
          <Link to="/events" className={activeLinkClass('/events')}>
            ALL EVENTS
          </Link>
        </div>

       
          <div className="navLinks">
            <Link to="/events/new" className={activeLinkClass('/events/new')}>
              CREATE EVENT
            </Link>
          </div>
      

        <div className="navLogout">
          <Link to="" onClick={handleLogOut}>
            log out
          </Link>
        </div>
      </div>
    </>
  );
}
