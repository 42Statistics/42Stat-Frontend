import { Divider, HStack, VStack } from '@components/common';
import { FtLoginButton, GoogleLoginButton } from '@components/common/Button';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { withHead } from '@hoc/withHead';
import { useEffect, useState } from 'react';
import { Introduction } from './Introduction';

const LandingPage = () => {
  const theme = useTheme();

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Layout>
      <VStack spacing="10rem">
        <HStack spacing="2rem" h="25rem">
          <Divider color={theme.colors.mono.white} orientation="vertical" />
          <Title isMounted={isMounted}>
            <VStack align="start" spacing="6rem">
              <a href="/">
                <AppLogoTitle size="sm" color={theme.colors.mono.white} />
              </a>
              <Introduction />
            </VStack>
          </Title>
        </HStack>
        <VStack spacing="2rem">
          <FtLoginButton />
          <GoogleLoginButton />
        </VStack>
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  user-select: none;
`;

type TitleProps = {
  isMounted: boolean;
};

const Title = styled.div<TitleProps>`
  transform: ${({ isMounted }) => !isMounted && 'translateX(-30px)'};
  opacity: ${({ isMounted }) => !isMounted && 0};
  transition: all 0.5s ease-in-out;
`;
export default withHead(LandingPage);
