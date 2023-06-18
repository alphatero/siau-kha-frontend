import Axios, { AxiosRequestConfig } from 'axios';
import { cookies } from '@/utils/cookies';
import {
  getRequestSuccess, getResponseError, getRequestError, getResponseSuccess,
} from './interceptors';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseInstance = () => {
  const axiosInstance = Axios.create({
    baseURL: apiUrl,
  });

  axiosInstance.interceptors.request.use(getRequestSuccess(), getRequestError());
  axiosInstance.interceptors.response.use(getResponseSuccess(), getResponseError());

  return axiosInstance;
};

export const request = baseInstance();

export const post = async <T>(url: string, data?: T, config?: AxiosRequestConfig) => {
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

export const del = async (url: string, config?: AxiosRequestConfig) => {
  const axiosInstance = baseInstance();
  const { token } = cookies.get('user');

  const res = await axiosInstance.delete(url, {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const patch = async <T>(url: string, data: T, config?: AxiosRequestConfig) => {
  const axiosInstance = baseInstance();
  const { token } = cookies.get('user');

  const res = await axiosInstance.patch(url, data, {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
