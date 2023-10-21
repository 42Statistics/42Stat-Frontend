import { useTheme } from '@emotion/react';

import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import { LoginButton } from '@shared/components/LoginButton/LoginButton';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { URL } from '@shared/constants/url';

export const FtLoginButton = () => {
  const theme = useTheme();

  const params = new URLSearchParams();
  params.append('client_id', import.meta.env.VITE_FT_OAUTH_CLIENT_ID);
  params.append('redirect_uri', import.meta.env.VITE_FT_OAUTH_REDIRECT_URI);
  params.append('response_type', 'code');

  const FT_OAUTH_URL = `${URL.FT_OAUTH_ENDPOINT}?${params.toString()}`;

  return (
    <LoginButton
      logo={
        <FtLogo
          width={18}
          height={18}
          fill={theme.colors.mono.absolute.black}
        />
      }
      text="42 계정으로 로그인"
      ariaLabel={ARIA_LABEL.BUTTON.LOGIN_WITH_42_ACCOUNT}
      onClick={() => {
        window.location.href = FT_OAUTH_URL;
      }}
    />
  );
};
