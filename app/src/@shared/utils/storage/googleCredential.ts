import { SESSION_STORAGE_KEYS } from '@shared/constants/storage';

export const getGoogleCredential = () => {
  return sessionStorage.getItem(SESSION_STORAGE_KEYS.GOOGLE_CREDENTIAL);
};

export const setGoogleCredential = (googleCredential: string) => {
  sessionStorage.setItem(
    SESSION_STORAGE_KEYS.GOOGLE_CREDENTIAL,
    googleCredential,
  );
};

export const removeGoogleCredential = () => {
  sessionStorage.removeItem(SESSION_STORAGE_KEYS.GOOGLE_CREDENTIAL);
};
