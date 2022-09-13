import { axiosAuthInstance } from '../apis/axiosInstance';

export const getMedicines = async () => {
  const { data } = await axiosAuthInstance({
    url: '/api/v1/main',
    method: 'GET',
  });

  return data;
};
