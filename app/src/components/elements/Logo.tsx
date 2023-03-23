import { AppLogoTitle } from '@/assets/AppLogoTitle';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <LogoLayout onClick={handleClick}>
      <AppLogoTitle size="sm" />
    </LogoLayout>
  );
};

const LogoLayout = styled.div`
  cursor: pointer;
`;
