import axios from 'axios';

export type Item = {
  id: number;
  title: string;
  body: string;
};

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/test/post',
  headers: { withCredentials: true },
});

export const getItemAll = async () => {
  const { data } = await apiClient.get('/');
  return data;
};

export const getItemById = async (id) => {
  const response = await apiClient.get(`/${id}`);
  return response.data;
};

export const createItem = async ({ id, title, body }: Item) => {
  const response = await apiClient.post('/', {
    body,
    title,
    id,
  });
  console.log('post');
  console.log(response.data);
  return response.data;
};

export const putById = async (id: number, body: string) => {
  const response = await apiClient.put(`/`, {
    body,
    id,
  });
  console.log('put');
  console.log(response.data);
  return response.data;
};

export const patchById = async (id: number, body: string) => {
  const response = await apiClient.patch(`/`, {
    body,
    id,
  });
  console.log('patch');
  console.log(response.data);
  return response.data;
};

export const deleteById = async (id: number) => {
  const response = await apiClient.delete(`/${id}`);
  return response.data;
};

export const queryKeys = {
  posts: ['posts'] as const,
  createPost: (id: number, title: string, body: number) =>
    ['createPost', id, title, body] as const,
};
