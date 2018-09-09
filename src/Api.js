import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const updateCompany = values => axios.post(`${apiUrl}putCompany`, values);

const getPrices = values =>
  axios.get(`${apiUrl}getPrice`, { params: values }).then(res => res.data);

const login = values => axios.post(`${apiUrl}login`, values).then(console.log);

export default {
  updateCompany,
  getPrices,
  login,
};
