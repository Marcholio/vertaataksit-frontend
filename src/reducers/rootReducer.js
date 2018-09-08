import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import { reducer as formReducer } from 'redux-form';
import customerReducer from './customerReducer';

export default combineReducers({
  admin: adminReducer,
  form: formReducer,
  customer: customerReducer,
});
