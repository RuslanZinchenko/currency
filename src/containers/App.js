import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieGrid from '../components/MovieGrid';
import SearchBar from '../components/SearchBar';
import styles from '../components/MoviePage.module.css';
import * as ArticleAPI from '../services/article-api';

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  // static propTypes = {
  //   items: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       title: PropTypes.string.isRequired,
  //       posterUrl: PropTypes.string.isRequired,
  //       overview: PropTypes.string.isRequired,
  //     }),
  //   ).isRequired,
  // };

  state = {
    currency: {},
    filter: '',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    ArticleAPI.fetchCurrency()
      .then(data =>
        this.setState({
          currency: data.data,
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { currency, filter } = this.state;
    console.log(currency.rates);
    // const filteredTasks = filterTasks(tasks, filter);

    return (
      <div className={styles.container}>
        {/* <SearchBar value={filter} onChangeFilter={this.changeFilter} />
        <MovieGrid items={filteredTasks} /> */}
      </div>
    );
  }
}
