import {
  FT_OAUTH_ENDPOINT,
  FT_OAUTH_RESPONSE_TYPE,
} from '@/constants/FT_OAUTH';
import ft_logo from '@assets/42-logo.svg';
import { Image } from '@components/common';
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
        logo={<FtLogo />}
        text="42 계정으로 로그인"
        onClick={() => {
          /* pass */
        }}
      />
    </a>
  );
};

const FtLogo = () => {
  return <Image src={ft_logo} alt="42 로고" width="18px" />;
};
