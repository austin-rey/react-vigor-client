import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ date, title, subtitle, tag, footer }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-sm opacity-95">
      <div className="flex flex-col items-center p-2">
        {date && (
          <div className="rounded-full bg-gray-700 bg-opacity-80 w-16 h-16 my-6 flex items-center justify-center shadow">
            <p className="font-sans font-bold text-sm text-white">{date}</p>
          </div>
        )}
        <h5 className="font-sans font-bold text-xl">{title}</h5>
        <p className="text-sm pb-1">{subtitle}</p>
        <p className="font-sans text-md text-yellow-500">{tag}</p>
      </div>
      <div className="p-2">{footer}</div>
    </div>
  );
};

Card.propTypes = {
  date: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tag: PropTypes.string,
  footer: PropTypes.element,
};

export default Card;
