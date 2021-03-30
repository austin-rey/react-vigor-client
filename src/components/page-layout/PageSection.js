import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const PageSection = ({
  anchor = '/',
  icon = <FontAwesomeIcon icon={faMapMarkerAlt} />,
  heading = 'Section Heading',
  subheading = 'Section Subheading',
  body,
}) => {
  return (
    <div className="w-full border-b-2 mb-10">
      <div className="flex w-full flex-row justify-between">
        <div className="mb-12">
          <div className="flex flex-row items-center">
            <span className="text-2xl pr-4 text-center text-green-500">
              {icon}
            </span>
            <h2
              className="text-4xl font-Lato my-4 text-left text-white"
              id={anchor}
            >
              {heading}
            </h2>
          </div>
          <h5 className="text-xl font-Lato text-left text-yellow-500">
            {subheading}
          </h5>
        </div>
        <button className="w-10 h-10 my-4 text-white font-bold text-2xl text-green-500">
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </button>
      </div>
      <div className="my-2">{body}</div>
    </div>
  );
};

export default PageSection;
