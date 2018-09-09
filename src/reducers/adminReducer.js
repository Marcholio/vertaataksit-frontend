import { Map } from 'immutable';
import { LOGIN, LOGIN_COMPLETE, LOGIN_FAILED } from '../actions/types';

const initialState = Map({
  authenticated: false,
  loading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('loading', true);
    case LOGIN_COMPLETE:
      return state.set('loading', false).set('authenticated', true);
    case LOGIN_FAILED:
      return state.set('loading', false).set('authenticated', false);
    default:
      return state;
  }
};
