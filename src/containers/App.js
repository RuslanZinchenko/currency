import React, { Component } from 'react';
import CurrencyList from '../components/CurrencyList/CurrencyList';
import SearchBar from '../components/SearchBar/SearchBar';
import * as ArticleAPI from '../services/article-api';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    data: {},
    currency: {},
    filter: '',
    error: null,
  };

  componentDidMount() {
    ArticleAPI.fetchCurrency()
      .then(data =>
        this.setState({
          data: data.data,
          currency: data.data.rates,
        }),
      )
      .catch(error => this.setState({ error }));
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterCurrency = () => {
    const { currency, filter } = this.state;
    const keyArr = Object.entries(currency).filter(i =>
      i[0].toLowerCase().includes(filter.toLowerCase()),
    );
    return keyArr.sort().map(i => `${i[0]}: ${i[1]}`);
  };

  render() {
    const { data, currency, filter, error } = this.state;
    const filteredCurrency = this.filterCurrency(currency, filter);
    console.log(data);

    return (
      <div className={styles.wrapper}>
        {error || ''}
        <SearchBar value={filter} onChangeFilter={this.changeFilter} />
        <div className={styles.currencyInfo}>
          <p>Base: {data.base}</p>
          <p>Date: {data.date}</p>
        </div>
        <CurrencyList items={filteredCurrency} />
      </div>
    );
  }
}
