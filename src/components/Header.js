import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="bg-gray-900 h-20 flex">
      <div className="flex flex-row items-center justify-end w-full pr-5 container mx-auto">
        <p>
          <Link to="/" className="p-2 text-white font-sans font-bold text-sm">
            Home
          </Link>
        </p>
        <p>
          <Link
            to="/auth"
            className="p-2 text-white font-sans font-bold text-sm"
          >
            Login
          </Link>
        </p>
        <p>
          <Link
            to="/auth"
            className="p-2 text-white font-sans font-bold text-sm"
          >
            Register
          </Link>
        </p>
        <p>
          <Link
            to="/dashboard"
            className="p-2 text-white font-sans font-bold text-sm"
          >
            Dashboard
          </Link>
        </p>
        <p>
          <Link className="p-2 text-white font-sans font-bold text-sm">
            Profile
          </Link>
        </p>
        <p>
          <Link className="p-2 text-white font-sans font-bold text-sm">
            Logout
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
