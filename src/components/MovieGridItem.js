import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';

const MovieGridItem = ({ title, posterUrl, overview }) => (
  <div className={styles.movieCard}>
    <img src={posterUrl} alt="pictures" className={styles.icon} width="250" />
    <div className={styles.content}>
      <h2 className={styles.label}>{title}</h2>
      <p className={styles.capacity}>{overview}</p>
    </div>
  </div>
);

MovieGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieGridItem;
