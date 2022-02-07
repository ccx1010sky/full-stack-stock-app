import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className="navbar">
        <div className="navbar-button">
          <li>
            <Link to="/">
              <button>
                <i className="fas fa-home"></i> Home
              </button>
            </Link>
          </li>
        </div>
        <div className="navbar-button">
          <li>
            <Link to="/add">
              <button>
                <i class="fas fa-plus-circle"></i> Add Shares
              </button>
            </Link>
          </li>
        </div>
        <div className="navbar-button">
          <li>
            <Link to="/calculator">
              <button>
                <i class="fas fa-calculator"></i> Calculator
              </button>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
