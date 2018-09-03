import { GET_COMPANIES } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
