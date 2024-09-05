// src/components/NavBar.jsx
import React from 'react';

const NavBar = ({ onPageChange }) => {
  return (
    <nav className="relative z-10 flex justify-between items-center p-2 bg-white w-full shadow-md">
      <div className="flex items-center">
        <img
          src="/images/logo.jpg" 
          alt="Logo"
          className="w-16 h-16" // Reduced logo size
        />
        <h1 
          className="ml-4 text-4xl font-bold text-black"
          style={{ fontFamily: 'Allura, cursive' }}
        >
          SangKriti
        </h1>
      </div>
      <div className="flex items-center space-x-6"> {/* Adjusted spacing */}
        <button
          onClick={() => onPageChange('home')}
          className="relative text-lg text-black after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </button>
        <button
          onClick={() => onPageChange('about')}
          className="relative text-lg text-black after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          Explore
        </button>
        <button
          onClick={() => onPageChange('contact')}
          className="relative text-lg text-black after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          Community
        </button>
        <i className="fas fa-user text-lg text-black mx-2"></i>
      </div>
    </nav>
  );
};

export default NavBar;
