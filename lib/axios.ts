import axios from 'axios';

const fetchApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default fetchApi;
