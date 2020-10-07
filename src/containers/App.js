import React, { Component } from 'react';
import CurrencyList from '../components/CurrencyList/CurrencyList';
import SearchBar from '../components/SearchBar/SearchBar';
import Selector from '../components/Selector/Selector';
import * as ArticleAPI from '../services/article-api';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    data: {},
    currency: {},
    selector: [],
    base: null,
    filter: '',
    error: null,
  };

  componentDidMount() {
    ArticleAPI.fetchCurrency()
      .then(data =>
        this.setState({
          data: data.data,
          currency: data.data.rates,
          selector: Object.keys(data.data.rates).map(i => ({
            value: i,
            label: i,
          })),
        }),
      )
      .catch(error => this.setState({ error }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { base } = this.state;
    if (prevState !== this.state && base) {
      ArticleAPI.fetchCurrency(base)
        .then(data =>
          this.setState({
            data: data.data,
            currency: data.data.rates,
            selector: Object.keys(data.data.rates).map(i => ({
              value: i,
              label: i,
            })),
          }),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ base: null }));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  changeSelector = e => {
    this.setState({ base: e.value });
  };

  filterCurrency = () => {
    const { currency, filter } = this.state;
    const currencyToArr = Object.entries(currency);
    const keyArr = currencyToArr.filter(i =>
      i[0].toLowerCase().includes(filter.toLowerCase()),
    );
    return keyArr.sort().map(i => `${i[0]}: ${i[1]}`);
  };

  render() {
    const { data, currency, selector, filter, error } = this.state;
    const filteredCurrency = this.filterCurrency(currency, filter);

    return (
      <div className={styles.wrapper}>
        {error || ''}
        <SearchBar value={filter} onChangeFilter={this.changeFilter} />
        <Selector base={selector} onChangeSelector={this.changeSelector} />
        <div className={styles.currencyInfo}>
          <p>Base: {data.base}</p>
          <p>Date: {data.date}</p>
        </div>
        <CurrencyList items={filteredCurrency} />
      </div>
    );
  }
}
