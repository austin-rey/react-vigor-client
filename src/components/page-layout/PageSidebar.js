import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faBrain,
  faCarrot,
  faMedal,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

const sidebarButtons = [
  {
    buttonText: 'Calendar',
    anchor: 'calendar',
    icon: <FontAwesomeIcon icon={faCalendarAlt} />,
  },
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
    icon: <FontAwesomeIcon icon={faMedal} />,
  },
];

const PageSidebar = () => {
  return (
    <div>
      {sidebarButtons.map((item) => (
        <a key={item.anchor} href={`#${item.anchor}`}>
          <div className="w-full px-4 py-12 mb-6 bg-green-500 rounded-sm text-white hover:bg-white hover:text-green-500 hover:border-3 transition duration-400 ease-in-out">
            <p className="font-sans font-bold">
              <span className="pr-1">{item.icon}</span> {item.buttonText}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PageSidebar;
