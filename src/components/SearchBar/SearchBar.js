import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChangeFilter }) => (
  <div className={styles.searchBar}>
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChangeFilter}
      placeholder="Currency Search..."
    />
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.string.isRequired,
};

export default SearchBar;
