import { AxiosError } from 'axios';
import { cookies } from '@/utils/cookies';

export const getRequestSuccess = () => (req: any) => req;

export const getRequestError = () => (error: AxiosError) => error;

export const getResponseSuccess = () => (res: any) => res;

export const getResponseError = () => (error: AxiosError) => {
  const stataus = error.response?.status;

  if (stataus === 401) {
    // 清除 cookies
    cookies.remove('user');
    // 跳转到登录页
    window.location.href = '/login';
  }

  return error;
};

export default getResponseError;
