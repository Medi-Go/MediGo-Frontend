import { axiosAuthInstance } from '../apis/axiosInstance';

export const getCalendarTreatments = async (date: number) => {
  console.log(date);
  const { data } = await axiosAuthInstance({
    url: `/api/v1/calendar/treatments/${date}`,
    method: 'GET',
  });

  return data;
};

export const getCalendarPrescriptions = async (date: number) => {
  console.log(date);
  const { data } = await axiosAuthInstance({
    url: `/api/v1/calendar/prescriptions/${date}`,
    method: 'GET',
  });

  return data;
};
