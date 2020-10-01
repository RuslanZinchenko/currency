import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';

const SearchBar = ({ value, onChangeFilter }) => (
  <Fragment>
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChangeFilter}
      placeholder="Movie Search..."
    />
  </Fragment>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default SearchBar;
