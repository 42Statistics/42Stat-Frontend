import {
  FT_OAUTH_ENDPOINT,
  FT_OAUTH_RESPONSE_TYPE,
} from '@/constants/FT_OAUTH';
import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import { LoginButton } from './LoginButton';

export const FtLoginButton = () => {
  const params = new URLSearchParams();
  params.append('client_id', import.meta.env.VITE_FT_OAUTH_CLIENT_ID);
  params.append('redirect_uri', import.meta.env.VITE_FT_OAUTH_REDIRECT_URI);
  params.append('response_type', FT_OAUTH_RESPONSE_TYPE);
  const FT_OAUTH_URL = `${FT_OAUTH_ENDPOINT}?${params.toString()}`;

  return (
    <a href={FT_OAUTH_URL}>
      <LoginButton
        logo={<FtLogo width={18} height={18} />}
        text="42 계정으로 로그인"
        onClick={() => {
          /* pass */
        }}
      />
    </a>
  );
};
