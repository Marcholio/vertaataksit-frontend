import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const updateCompany = values =>
  axios.post(`${apiUrl}putCompany`, { ...values });

const getPrices = values =>
  new Promise(resolve => {
    console.log(values);
    resolve();
  });

export default {
  updateCompany,
  getPrices,
};
