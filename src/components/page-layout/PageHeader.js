import React from 'react';

const PageHeader = ({ heading }) => {
  return (
    <div className="w-full">
      <h1 className="text-5xl font-Lato pb-6 my-12 text-left border-b-2 text-white">
        {heading}
      </h1>
    </div>
  );
};

export default PageHeader;
