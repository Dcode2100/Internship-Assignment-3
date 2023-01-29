import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <nav>
      <div className="top-navbar">
        <div className="logo">
          <span>Facebook/React</span>
        </div>
        <div className="top-navbar-right">
          <button>Notification</button>
          <button>Star</button>
          <button>Fork</button>
        </div>
      </div>
      <div className="bottom-navbar-container">
        <div className="bottom-navbar">
          <Link to="/code">Code</Link>
          <Link to="/issues">Issues</Link>
          <Link to="/pullrequests">Pull requests</Link>
          <Link to="/actions">Actions</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/wiki">Wiki</Link>
          <Link to="/security">Security</Link>
          <Link to="/insights">Insights</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
