/* global Promise, process */

import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const updateCompany = values =>
  axios.post(`${apiUrl}putCompany`, { ...values });

export default {
  updateCompany,
};
