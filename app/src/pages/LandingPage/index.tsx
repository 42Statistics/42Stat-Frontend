import { Divider, HStack, VStack } from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import {
  FtLoginButton,
  GoogleLoginButton,
} from '@components/elements/LoginButton';
import { keyframes, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { withHead } from '@hoc/withHead';
import { Introduction } from './Introduction';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <VStack spacing="10rem">
      <HStack spacing="2rem" h="25rem">
        <Divider color={theme.colors.mono.white} orientation="vertical" />
        <Title>
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
  );
};

const siledInFromLeft = keyframes`
    0% {
      transform: translateX(-30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
`;

const Title = styled.div`
  animation: ${siledInFromLeft} 0.5s ease-in-out;
`;

export default withHead(LandingPage);
