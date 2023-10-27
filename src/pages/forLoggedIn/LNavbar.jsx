import React, { useState } from "react";

import "./LNavbar.css";
import { Link, NavLink } from "react-router-dom";

const LNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent poppins">
      <Link to="/" className="title canopee tracking-wider">
        <span className="bg-[#3D2A73] rounded-lg md:text-5xl px-3 text-2xl sm:text-4xl">
          Tech Tatva
        </span>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/conclave">Conclave</NavLink>
        </li>
        <li>
          <NavLink to="/events-schedules">Events & Schedule</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="bg-white rounded text-purple-600 text-center mr-4 ml-8 leading-tight text-lg px-2">
          <h3>Shubh Sinha</h3>
          <p>Delegate ID: 49</p>
        </li>

      </ul>
    </nav>
  );
};

export default LNavbar;
