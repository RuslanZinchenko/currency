import axios from 'axios';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

/* eslint-disable-next-line */
export const fetchCurrency = (base = 'USD') =>
  axios.get(`${BASE_URL}?base=${base}`);
