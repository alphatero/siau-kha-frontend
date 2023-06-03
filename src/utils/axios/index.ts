import Axios, { AxiosRequestConfig } from 'axios';
import { cookies } from '@/utils/cookies';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseInstance = () => {
  const axiosInstance = Axios.create({
    baseURL: apiUrl,
  });

  return axiosInstance;
};

export const request = baseInstance();

export const post = async <T>(url: string, data: T, config?: AxiosRequestConfig) => {
  const axiosInstance = baseInstance();
  const { token } = cookies.get('user');

  const res = await axiosInstance.post(url, data, {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const get = async (url: string, config?: AxiosRequestConfig) => {
  const axiosInstance = baseInstance();
  const { token } = cookies.get('user');

  const res = await axiosInstance.get(url, {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
