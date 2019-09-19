import axios from 'axios';

const api = axios.create({
  baseURL: 'https://prossdev.herokuapp.com/',
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem('@TOKEN');
  if (token !== undefined) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;
