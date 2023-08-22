import { useTheme } from '@emotion/react';
import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import {
  FT_OAUTH_ENDPOINT,
  FT_OAUTH_RESPONSE_TYPE,
} from '@shared/constants/FT_OAUTH';
import { ARIA_LABEL_BUTTON } from '@shared/constants/accessibility/ARIA_LABEL';
import { LoginButton } from './LoginButton';

export const FtLoginButton = () => {
  const theme = useTheme();
  const params = new URLSearchParams();
  params.append('client_id', import.meta.env.VITE_FT_OAUTH_CLIENT_ID);
  params.append('redirect_uri', import.meta.env.VITE_FT_OAUTH_REDIRECT_URI);
  params.append('response_type', FT_OAUTH_RESPONSE_TYPE);
  const FT_OAUTH_URL = `${FT_OAUTH_ENDPOINT}?${params.toString()}`;

  return (
    <LoginButton
      logo={<FtLogo width={18} height={18} fill={theme.colors.mono.black} />}
      text="42 계정으로 로그인"
      ariaLabel={ARIA_LABEL_BUTTON.LOGIN_WITH_42_ACCOUNT}
      onClick={() => {
        window.location.href = FT_OAUTH_URL;
      }}
    />
  );
};
