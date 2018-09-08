import { GET_PRICES, GET_PRICES_COMPLETE, GET_PRICES_FAILED } from './types';
import Api from '../Api';

export const getPrices = (from, to) => dispatch => {
  dispatch({ type: GET_PRICES });
  Api.getPrices({ from, to })
    .then(res => dispatch({ type: GET_PRICES_COMPLETE, prices: res.prices }))
    .catch(err => dispatch({ type: GET_PRICES_FAILED, err }));
};
