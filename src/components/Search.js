import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange, placeholder }) => {
  return <div className="w-full h-12 bg-white rounded-sm"></div>;
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
