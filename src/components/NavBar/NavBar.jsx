import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
// import { useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  // const location = useLocation();


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


        <div className="navLinks">
          <Link to="/events" className={("/events")}>
            ALL EVENTS
          </Link>
        </div>

        <div className="navLinks">
          <Link to="/events/new" className={("/events/new")}>
            CREATE EVENT
          </Link>
        </div>

        <div className="navLogout">
          <Link to="" onClick={handleLogOut}>LOG OUT</Link>
        </div>
      </div>
    </>
  );
}
