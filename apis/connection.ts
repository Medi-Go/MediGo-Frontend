import { axiosAuthInstance } from '../apis/axiosInstance';

export const connectKakaoAuth = async () => {
  const { data } = await axiosAuthInstance({
    url: '/api/v1/connection',
    method: 'POST',
  });

  return data;
};

export const connectMydata = async () => {
  const { data } = await axiosAuthInstance({
    url: '/api/v1/connection/data',
    method: 'POST',
  });
  console.log(data);

  return data;
};
