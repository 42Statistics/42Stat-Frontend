import google_logo from '@assets/google-logo.svg';
import { Image } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from './LoginButton';

export const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // FIXME: 실제 로직으로 교체
    localStorage.setItem('googleauth', 'true');
    navigate(ROUTES.HOME);
  };

  return (
    <LoginButton
      logo={<GoogleLogo />}
      text="Google 계정으로 로그인"
      onClick={handleClick}
    />
  );
};

const GoogleLogo = () => {
  return <Image src={google_logo} alt="구글 로고" width="18px" />;
};
