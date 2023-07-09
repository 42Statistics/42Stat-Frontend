import { ACCESS_TOKEN_KEY } from '@/constants/SESSION_STORAGE_KEY';

export const getAccessToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (accessToken: string) => {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

export const removeAccessToken = () => {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
};
