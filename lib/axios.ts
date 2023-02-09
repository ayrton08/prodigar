import axios from 'axios';

const fetchApi = axios.create({
  baseURL: 'https://prodigar-api.vercel.app/api',
});

fetchApi.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    Authorization: 'bearer ' + localStorage.getItem('auth_token'),
  };

  return config;
});

export default fetchApi;
