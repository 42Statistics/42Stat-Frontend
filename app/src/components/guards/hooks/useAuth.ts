import { getAccessToken } from '@shared/utils/storage/accessToken';
import { getRefreshToken } from '@shared/utils/storage/refreshToken';

export const useAuth = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  return accessToken || refreshToken;
};
