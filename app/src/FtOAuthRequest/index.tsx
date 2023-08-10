import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import { FtLoginButton } from '@shared/components/LoginButton';
import { ROUTES } from '@shared/constants/ROUTES';
import { VStack, WhiteText } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';
import { Link } from 'react-router-dom';

const FtOAuthRequestPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <VStack h="100%" spacing="5rem">
        <Link to={ROUTES.ROOT}>
          <AppLogoTitle size="sm" color={theme.colors.mono.white} />
        </Link>
        <WhiteText>접속하기 위해서 42 계정과 연동이 필요합니다. </WhiteText>
        <FtLoginButton />
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  ${mq({
    width: ['100%', 'auto'],
    height: ['100%', 'auto'],
  })}
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 10rem 5rem;
  border-radius: ${({ theme }) => theme.radius.md};
`;

export default FtOAuthRequestPage;
