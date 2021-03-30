import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faBrain,
  faCarrot,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';

const sidebarButtons = [
  {
    buttonText: 'Fitness',
    anchor: 'fitness',
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    buttonText: 'Diet',
    anchor: 'diet',
    icon: <FontAwesomeIcon icon={faCarrot} />,
  },
  {
    buttonText: 'Goals',
    anchor: 'goals',
    icon: <FontAwesomeIcon icon={faMedal} />,
  },
  {
    buttonText: 'Wellness',
    anchor: 'wellness',
    icon: <FontAwesomeIcon icon={faBrain} />,
  },
];

const PageSidebar = () => {
  return (
    <>
      {sidebarButtons.map((item) => (
        <a className="w-1/4 m-1" key={item.anchor} href={`#${item.anchor}`}>
          <div className="shadow-lg opacity-90 px-4 py-12 mb-6 bg-green-500 rounded-sm text-white hover:bg-white hover:text-green-500 hover:border-3 transition duration-400 ease-in-out">
            <p className="font-sans font-bold">
              <span className="pr-1">{item.icon}</span> {item.buttonText}
            </p>
          </div>
        </a>
      ))}
    </>
  );
};

export default PageSidebar;
