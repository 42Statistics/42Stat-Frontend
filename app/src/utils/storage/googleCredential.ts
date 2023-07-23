import { GOOGLE_CREDENTIAL_KEY } from '@shared/constants/SESSION_STORAGE_KEY';

export const getGoogleCredential = () => {
  return sessionStorage.getItem(GOOGLE_CREDENTIAL_KEY);
};

export const setGoogleCredential = (googleCredential: string) => {
  sessionStorage.setItem(GOOGLE_CREDENTIAL_KEY, googleCredential);
};

export const removeGoogleCredential = () => {
  sessionStorage.removeItem(GOOGLE_CREDENTIAL_KEY);
};
