import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from './MovieGridItem';
import styles from './MoviePage.module.css';

const MovieGrid = ({ items }) => (
  <div className={styles.movieGrid}>
    <ul className={styles.list}>
      {items.map(item => (
        <li className={styles.listItem} key={item.id}>
          <MovieGridItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
