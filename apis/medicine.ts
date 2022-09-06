import { axiosAuthInstance } from '../apis/axiosInstance';

export const getMedicine = async () => {
  const { data } = await axiosAuthInstance({
    url: '/api/v1/main',
    method: 'GET',
  });

  return data;
};
