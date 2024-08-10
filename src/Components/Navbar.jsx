import React, { useState } from 'react';
import './CSS/Navbar.css';
import { Link } from 'react-router-dom';
// import logo from 'D://sdp//khome//src//Assets//logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      
                
                {/* <img src="D:\sdp\khome\src\Assets\logo.jpg" alt="logo" /> */}
           

        <img src="image/logo2.png" alt='logo'></img>
        <Link to="/">Tutor Track</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/login" className="navbar-item">Login/Signup</Link>
        {/* <Link to="/signup" className="navbar-item">Signup</Link> */}
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/aboutus" className="navbar-item">About</Link> 
        <Link to="/topcity" className="navbar-item">Top-Cities</Link> 
        <Link to="/help" className="navbar-item">Help</Link>
        <Link to="/contact" className="navbar-item">Contact</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
