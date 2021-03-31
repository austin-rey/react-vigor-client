import React from 'react';

const Loading = () => {
  return (
    <div className="flex w-full h-full bg-gray-100 items-center justify-center animate-pulse rounded-sm mb-8 ">
      <div className="p-2 transition-all duration-700 ease-in-out">
        <h1 className="font-Lato text-4xl text-center text-gray-700">
          Loading
        </h1>
        <img src="/spinner.gif" alt="loading spinner" />
      </div>
    </div>
  );
};

export default Loading;
