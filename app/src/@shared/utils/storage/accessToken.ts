import { SESSION_STORAGE_KEYS } from '@shared/constants/storage';

export const getAccessToken = () => {
  return sessionStorage.getItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN);
};

export const setAccessToken = (accessToken: string) => {
  sessionStorage.setItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
};

export const removeAccessToken = () => {
  sessionStorage.removeItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN);
};
