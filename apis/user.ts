import { UserSignUpFormType } from '../interfaces/user';
import axiosInstance, { axiosAuthInstance } from '../apis/axiosInstance';

export const login = async (id: number) => {
  const { data } = await axiosInstance({
    url: '/api/v1/login',
    method: 'POST',
    data: {
      id,
    },
  });

  return data;
};

export const getAuthUser = async () => {
  const { data } = await axiosInstance({
    url: '/api/v1/auth',
    method: 'GET',
  });

  return data;
};

export const logout = async () => {
  const { data } = await axiosInstance({
    url: '/api/v1/logout',
    method: 'POST',
  });

  return data;
};

export const signUp = async ({
  email,
  name,
  phoneNumber,
  jumin,
  carrier,
}: UserSignUpFormType) => {
  const { data } = await axiosInstance({
    url: '/api/v1/signup',
    method: 'POST',
    data: {
      email,
      name,
      phoneNumber,
      jumin,
      carrier,
    },
  });

  return data;
};

export const updateUserProfile = async ({
  email,
  name,
  phoneNumber,
  jumin,
  carrier,
}: UserSignUpFormType) => {
  const { data } = await axiosAuthInstance({
    method: 'PATCH',
    url: `/api/v1/member`,
    data: {
      email,
      name,
      phoneNumber,
      jumin,
      carrier,
    },
  });
  console.log('updateUserPRofile', data);

  return data;
};
