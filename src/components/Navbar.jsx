import React, { useContext } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/Home">
            {" "}
            <a className="navbar-brand" href="#">
              <i className="fa fa-thin fa-plane-departure"></i>Booking.com
            </a>
          </Link>
          <div className="bt">
            <Link to="/flightdetail">
              <p className="flight">All Flights</p>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setLoggedIn(false)}
              >
                Log out
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
