import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  return (
    <div className="absolute top-24 left-4 z-50">
      <Link 
        to="/" 
        className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Go back to homepage"
      >
        <FaArrowLeft className="text-gray-800" />
      </Link>
    </div>
  );
};

export default BackButton;
