import { AppLogoSvg } from '@/assets/AppLogoSvg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <LogoLayout onClick={handleClick}>
      <AppLogoSvg size="sm" />
    </LogoLayout>
  );
};

const LogoLayout = styled.div`
  cursor: pointer;
`;
