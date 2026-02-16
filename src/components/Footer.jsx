import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import biwcLogo from "../assets/img/biwc-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Logo + Mission */}
          <div>
            <img src={biwcLogo} alt="BIWC Logo" className="w-14 mb-4" />
            <p className="text-blue-200 text-sm leading-relaxed">
              Building lives through Christ-centered worship, teaching,
              fellowship, and outreach. Helping people find their way to Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ministries">Ministries</Link></li>
              <li><Link to="/auxiliaries">Auxiliaries</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Media Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Media</h3>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link to="/sermons">Sermons</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/events">Upcoming Events</Link></li>
              <li><Link to="/ministries">Church Ministries</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>

            <div className="flex space-x-4 text-xl">
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaTwitter />
              </a>
            </div>

            <p className="text-blue-300 text-sm mt-4">
              Abelemkpe, Accra, Ghana
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          © {new Date().getFullYear()} BIWC Church. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;