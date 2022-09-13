import { axiosAuthInstance } from '../apis/axiosInstance';

export const getMedicines = async () => {
  const { data } = await axiosAuthInstance({
    url: '/api/v1/main',
    method: 'GET',
  });

  return data;
};

export const getMedicineDetail = async (medicineId: number) => {
  const { data } = await axiosAuthInstance({
    url: `/api/v1/medicine/${medicineId}`,
    method: 'GET',
  });

  return data;
};
