import { AppLogoSvg } from '@/assets/AppLogoSvg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <LogoLayout onClick={goToHome}>
      <AppLogoSvg />
    </LogoLayout>
  );
};

const LogoLayout = styled.div`
  cursor: pointer;
`;
