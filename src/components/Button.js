import React from 'react';

const Button = ({ text, onclick, size }) => {
  return (
    <button onClick={onclick} className="">
      {text}
    </button>
  );
};

export default Button;
