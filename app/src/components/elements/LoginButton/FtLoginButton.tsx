import ft_logo from '@assets/42-logo.svg';
import { Image } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from './LoginButton';

export const FtLoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // FIXME: 실제 로직으로 교체
    localStorage.setItem('ftoauth', 'true');
    navigate(ROUTES.HOME);
  };

  return (
    <LoginButton
      logo={<FtLogo />}
      text="42 계정으로 로그인"
      onClick={handleClick}
    />
  );
};

const FtLogo = () => {
  return <Image src={ft_logo} alt="42 로고" width="18px" />;
};
