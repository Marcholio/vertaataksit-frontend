import { Map } from 'immutable';
import {
  GET_PRICES,
  GET_PRICES_COMPLETE,
  GET_PRICES_FAILED,
} from '../actions/types';

const initialState = Map({
  loading: false,
  prices: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRICES:
      return state.set('loading', true);
    case GET_PRICES_COMPLETE:
      return state.set('loading', false).set('prices', action.prices);
    case GET_PRICES_FAILED:
      return state.set('loading', false);
    default:
      return state;
  }
};
