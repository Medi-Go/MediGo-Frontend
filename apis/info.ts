import axiosInstance from '../apis/axiosInstance';

export const inputInfo = async (month: number) => {
  const { data } = await axiosInstance({
    url: '/api/v1/info-input',
    method: 'GET',
    data: {
      month,
    },
  });

  return data;
};
