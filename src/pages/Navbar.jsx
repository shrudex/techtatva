import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent poppins">
      <Link to="/" className="title canopee tracking-wider  ">
        <span className="bg-[#3D2A73] rounded text-5xl px-3">Tech Tatva</span>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/rulebook">Rule Book</NavLink>
        </li>
        <li>
          <NavLink to="/conclave">Conclave</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
