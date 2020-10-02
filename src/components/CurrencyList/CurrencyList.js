import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './CurrencyList.module.css';

const CurrencyList = ({ items }) => (
  <div className={styles.currencyList}>
    <ul className={styles.list}>
      {items.map(item => (
        <li className={styles.listItem} key={shortid.generate()}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

CurrencyList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.array.isRequired,
    }),
  ).isRequired,
};

export default CurrencyList;
