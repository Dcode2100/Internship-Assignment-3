import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { links } from "../../common/common";


const Header = () => {
  return (
    <nav>
      <div className="top-navbar">
        <div className="logo">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="logo"
          />
          <span>Facebook/React</span>
          <div className="public">Public</div>
        </div>
        <div className="top-navbar-right">
          <button>Notification</button>
          <button>Star 195k</button>
          <button>Fork 40.2k</button>
        </div>
      </div>
      <div className="bottom-navbar-container">
        <div className="bottom-navbar">
          {links.map((link, index) => (
            <Link id="links" key={index} to={link.route}>
              {link.icon} <span className="link-label">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
