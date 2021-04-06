import React from 'react';
import Button from '../Button';

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

const PageTabBar = ({ changeTab }) => {
  return (
    <>
      {sidebarButtons.map((item) => (
        <div className="w-1/4 m-2 mb-6" key={item.anchor}>
          <Button
            color="green"
            onclick={() => changeTab(item.anchor)}
            body={
              <div className="px-4 py-12 rounded-sm">
                <p className="font-sans font-bold">
                  <span className="pr-1">{item.icon}</span> {item.buttonText}
                </p>
              </div>
            }
          />
        </div>
      ))}
    </>
  );
};

export default PageTabBar;
