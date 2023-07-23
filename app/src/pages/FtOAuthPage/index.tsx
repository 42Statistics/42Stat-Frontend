import { VStack, WhiteText } from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { FtLoginButton } from '@components/elements/LoginButton';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { withHead } from '@hoc/withHead';
import { ROUTES } from '@shared/constants/ROUTES';
import { mq } from '@shared/utils/responsive/mq';
import { Link } from 'react-router-dom';

const FtOAuthPage = () => {
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

export default withHead(FtOAuthPage);
