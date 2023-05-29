import google_icon from '@/assets/g-logo.svg';
import { Clickable, HStack, Image, MediumText } from '@/components/common';
import { ROUTES } from '@/routes/ROUTES';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { needFtOAuthAtom } from '@/utils/atoms/needFtOAuthAtom';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export const GoogleLoginBtn = () => {
  const navigate = useNavigate();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setIsNeedFtOAuth = useSetAtom(needFtOAuthAtom);

  const handleClick = () => {
    // FIXME: 실제 로직으로 교체
    setIsAuthenticated('true');
    setIsNeedFtOAuth('true');
    navigate(ROUTES.FTOAUTH);
  };

  return (
    <Clickable
      onClick={handleClick}
      element={
        <GoogleLoginBtnLayout>
          <HStack spacing="24px">
            <Image src={google_icon} width="18px" />
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
