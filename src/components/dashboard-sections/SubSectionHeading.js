import React from 'react';
import Search from '../Search';
import PropTypes from 'prop-types';

const SectionHeading = ({ heading, subheading, searchValue, searchChange }) => {
  return (
    <div className="flex flex-col w-96 mr-10">
      <h3 className="text-2xl font-Lato mb-2 text-left text-gray-300">
        {heading}
      </h3>
      <h6 className="text-md text-left text-yellow-500 mb-6">{subheading}</h6>
      <Search
        value={searchValue}
        searchChange={searchChange}
        placeholder="Search by name, description, date"
      />
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  searchValue: PropTypes.string,
  searchChange: PropTypes.func,
};

export default SectionHeading;
