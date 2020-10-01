import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import styles from './MoviePage.module.css';

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class MoviePage extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    tasks: this.props.items,
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = filterTasks(tasks, filter);

    return (
      <div className={styles.container}>
        <SearchBar value={filter} onChangeFilter={this.changeFilter} />
        <MovieGrid items={filteredTasks} />
      </div>
    );
  }
}
