import google_logo from '@assets/google-logo.svg';
import { Clickable, HStack, Image, MediumText } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { rgba } from 'emotion-rgba';
import { useNavigate } from 'react-router-dom';

export const GoogleLoginButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    // FIXME: 실제 로직으로 교체
    localStorage.setItem('googleauth', 'true');
    navigate(ROUTES.HOME);
  };

  return (
    <Clickable onClick={handleClick}>
      <Layout>
        <HStack spacing="24px">
          <Image src={google_logo} alt="구글 로고" width="18px" />
          <MediumText color={rgba(theme.colors.mono.black, 0.75)}>
            Google 계정으로 로그인
          </MediumText>
        </HStack>
      </Layout>
    </Clickable>
  );
};

const Layout = styled.div`
  width: 24rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 8px 20px 8px 8px;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.mono.white, 0.8)};
  }
`;
