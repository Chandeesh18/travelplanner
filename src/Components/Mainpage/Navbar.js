import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/styles.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo">A2Z</span>
        <span className="logo-animated">Trip planner</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={isMenuOpen ? "menu active" : "menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/createtrip">Create Trip</Link></li>
        <li><Link to="/createtrip">My Trips</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
