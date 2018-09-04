import { GET_PRICES, GET_PRICES_COMPLETE, GET_PRICES_FAILED } from './types';
import Api from '../Api';

export const getPrices = (from, to) => dispatch => {
  dispatch({ type: GET_PRICES });
  Api.getPrices({ from, to })
    .then(() => dispatch({ type: GET_PRICES_COMPLETE }))
    .catch(err => dispatch({ type: GET_PRICES_FAILED, err }));
};
