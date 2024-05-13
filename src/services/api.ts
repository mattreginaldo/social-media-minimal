import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error('Missing API URL');
}

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * api.interceptors.request.use()
 * api.interceptors.response.use()
 * We can configure interceptors with additional headers and status handlers
 */

export default api;
