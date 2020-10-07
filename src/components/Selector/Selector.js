import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './Selector.module.css';

const Selector = ({ base, onChangeSelector }) => (
  <div>
    <Select
      options={base}
      className={styles.selector}
      onChange={onChangeSelector}
      placeholder="Base Currency"
    />
  </div>
);

Selector.propTypes = {
  base: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onChangeSelector: PropTypes.func.isRequired,
};

export default Selector;
