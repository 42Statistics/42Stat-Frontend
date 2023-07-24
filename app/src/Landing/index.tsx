import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import {
  FtLoginButton,
  GoogleLoginButton,
} from '@components/elements/LoginButton';
import { useTheme } from '@emotion/react';
import { withHead } from '@shared/hoc/withHead';
import { VStack } from '@shared/ui-kit';
import { Introduction } from './components/Introduction';

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
