import { LOCAL_STORAGE_KEYS } from '@shared/constants/storage';

export const getRefreshToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
};
