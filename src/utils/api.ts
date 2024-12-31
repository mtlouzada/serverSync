import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};
