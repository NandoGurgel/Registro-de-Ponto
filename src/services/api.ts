import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apis.lbstudio.com',
});

export default api;
