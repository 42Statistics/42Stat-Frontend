import ft_logo from '@assets/42-logo.svg';
import { needFtOAuthAtom } from '@atoms/needFtOAuthAtom';
import { Clickable, HStack, Image, MediumText } from '@components/common';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export const FtOAuthLoginBtn = () => {
  const navigate = useNavigate();
  const setIsNeedFtOAuth = useSetAtom(needFtOAuthAtom);

  const handleClick = () => {
    // FIXME: 실제 로직으로 교체
    setIsNeedFtOAuth(false);
    navigate(ROUTES.ROOT);
  };
  return (
    <Clickable onClick={handleClick}>
      <FtOAuthLoginBtnLayout>
        <HStack spacing="24px">
          <Image src={ft_logo} alt="42 로고" width="18px" />
          <MediumText>42 계정으로 로그인</MediumText>
        </HStack>
      </FtOAuthLoginBtnLayout>
    </Clickable>
  );
};

const FtOAuthLoginBtnLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 8px 20px 8px 8px;
  border-radius: ${({ theme }) => theme.radius.xs};
`;
