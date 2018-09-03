import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  admin: adminReducer,
  form: formReducer,
});
