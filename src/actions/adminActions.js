import {
  UPDATE_COMPANY,
  UPDATE_COMPANY_COMPLETE,
  UPDATE_COMPANY_FAILED,
  LOGIN,
  LOGIN_COMPLETE,
  LOGIN_FAILED,
} from './types';
import Api from '../Api';

export const updateCompany = values => dispatch => {
  dispatch({ type: UPDATE_COMPANY });
  const updatedValues = Object.assign(values, {
    id: values.companyName.toLowerCase().replace(' ', '-'),
  });
  Api.updateCompany(updatedValues)
    .then(() => dispatch({ type: UPDATE_COMPANY_COMPLETE }))
    .catch(err => dispatch({ type: UPDATE_COMPANY_FAILED, err }));
};

export const login = values => dispatch => {
  dispatch({ type: LOGIN });
  Api.login(values)
    .then(() => dispatch({ type: LOGIN_COMPLETE }))
    .catch(err => dispatch({ type: LOGIN_FAILED, err }));
};
