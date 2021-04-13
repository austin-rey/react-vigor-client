import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';

const Header = () => {
  const authenticated = useSelector((state) => state.user.authenticated);
  const dispatch = useDispatch();

  const logInOut = authenticated ? (
    <>
      <p
        className="p-2 text-white font-sans font-bold text-sm cursor-pointer"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </p>
      <p>
        <Link
          to="/dashboard"
          className="p-2 text-white font-sans font-bold text-sm"
        >
          Dashboard
        </Link>
      </p>
    </>
  ) : (
    <>
      <p>
        <Link to="/auth" className="p-2 text-white font-sans font-bold text-sm">
          Login
        </Link>
      </p>
      <p>
        <Link to="/auth" className="p-2 text-white font-sans font-bold text-sm">
          Register
        </Link>
      </p>
    </>
  );
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto flex items-between justify-center h-20">
        <div className="flex text-white text-4xl ml-4 items-center">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="flex flex-row items-center justify-end w-full pr-5 container mx-auto">
          <p>
            <Link to="/" className="p-2 text-white font-sans font-bold text-sm">
              Home
            </Link>
          </p>
          {logInOut}
        </div>
      </div>
    </div>
  );
};

export default Header;
