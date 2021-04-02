import React from 'react';

const Modal = (props) => {
  const modalStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '900px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
  };

  return <div>{props.children}</div>;
};

export default Modal;
