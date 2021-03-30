import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Button = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="w-full h-full flex flex-col items-center justify-center shadow-lg opacity-90 bg-green-500 rounded-sm text-white hover:bg-white hover:text-green-500 hover:border-3 transition duration-400 ease-in-out"
    >
      <span className="text-2xl pb-1">
        <FontAwesomeIcon icon={faPlusCircle} />
      </span>
      <h5 className="font-sans font-bold text-xl">CREATE</h5>
    </button>
  );
};

export default Button;
