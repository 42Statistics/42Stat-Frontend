import google_logo from '@assets/google-logo.svg';
import { isAuthenticatedAtom } from '@atoms/isAuthenticatedAtom';
import { needFtOAuthAtom } from '@atoms/needFtOAuthAtom';
import { Clickable, HStack, Image, MediumText } from '@components/common';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export const GoogleLoginBtn = () => {
  const navigate = useNavigate();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setIsNeedFtOAuth = useSetAtom(needFtOAuthAtom);

  const handleClick = () => {
    // FIXME: 실제 로직으로 교체
    setIsAuthenticated(true);
    setIsNeedFtOAuth(true);
    navigate(ROUTES.FTOAUTH);
  };

  return (
    <Clickable
      onClick={handleClick}
      element={
        <GoogleLoginBtnLayout>
          <HStack spacing="24px">
            <Image src={google_logo} width="18px" />
            <MediumText color="rgba(0, 0, 0, 0.54)">
              Google 계정으로 로그인
            </MediumText>
          </HStack>
        </GoogleLoginBtnLayout>
      }
    />
  );
};

const GoogleLoginBtnLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 8px 20px 8px 8px;
  border-radius: 0.7rem;
`;
