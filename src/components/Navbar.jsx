import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Import your logo
import biwcLogo from '../assets/img/biwc-logo.jpeg'; // Assuming the path is correct

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav
      className="sticky top-0 z-50 w-full h-[80px] flex items-center justify-around px-4 bg-transparent text-[color:var(--text)]"
    >
      {/* Logo */}
      <div>
        <img src={biwcLogo} alt="BIWC Logo" className="w-12" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-1 items-center justify-around max-w-4xl">
        <li>
          <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/">Home</Link>
        </li>
        <li>
          <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/about">About Us</Link>
        </li>
        <li>
          <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/auxiliaries">Auxiliaries</Link>
        </li>
        <li>
          <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/ministries">Ministries</Link>
        </li>
        <li>
          <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/media">Media</Link>
        </li>
        <li>
          <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50 text-2xl drop-shadow-sm">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[color:var(--bg)] text-[color:var(--text)] flex flex-col justify-center items-center md:hidden'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/about">
            About Us
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/auxiliaries">
            Auxiliaries
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/ministries">
            Ministries
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/media">
            Media
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
