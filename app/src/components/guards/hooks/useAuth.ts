import { getAccessToken } from '@utils/storage/accessToken';
import { getRefreshToken } from '@utils/storage/refreshToken';

export const useAuth = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  return accessToken || refreshToken;
};
