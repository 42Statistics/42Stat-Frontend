import { VStack } from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import {
  FtLoginButton,
  GoogleLoginButton,
} from '@components/elements/LoginButton';
import { useTheme } from '@emotion/react';
import { withHead } from '@hoc/withHead';
import { Introduction } from './Introduction';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <VStack spacing="10rem">
      <a href="/">
        <AppLogoTitle size="sm" color={theme.colors.mono.white} />
      </a>
      <Introduction />
      <VStack spacing="2rem">
        <FtLoginButton />
        <GoogleLoginButton />
      </VStack>
    </VStack>
  );
};

export default withHead(LandingPage);
