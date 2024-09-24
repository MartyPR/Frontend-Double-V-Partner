import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

export const getProductos = () => api.get('/products');
export const getProductoDetalle = (id) => api.get(`/products/${id}`);
