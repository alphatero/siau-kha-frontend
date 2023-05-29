import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { cookies } from '@/utils/cookies';

export const baseInstance = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // const { token } = cookies.get('user');

  const axiosInstance = Axios.create({
    baseURL: apiUrl,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });

  return axiosInstance;
};

export const request = baseInstance();

// export const post = async <T>(url: string, data: T, config?: AxiosRequestConfig) => {
//   const axiosInstance = axios();
//   const res = await axiosInstance.post(url, data, config);
//   return res;
// };

// export const get = async (url: string, config?: AxiosRequestConfig) => {
//   const axiosInstance = axios();
//   const res = await axiosInstance.get(url, config);
//   return res;
// };
