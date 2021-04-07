import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onclick, body, color }) => {
  return (
    <button
      onClick={onclick}
      className={`transition duration-200 ease-in-out transform w-full h-full flex flex-col items-center justify-center shadow-lg opacity-90 bg-${color}-500 rounded-sm text-white hover:bg-${color}-200 hover:border-3 hover:text-gray-900 duration-400 ease-in-out hover:scale-105`}
    >
      {body}
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
  body: PropTypes.element,
  color: PropTypes.string,
};

export default Button;
