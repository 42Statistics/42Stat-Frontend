import astronaut from '@/Landing/assets/astronaut.png';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import {
  FtLoginButton,
  GoogleLoginButton,
} from '@shared/components/LoginButton';
import { ARIA_LABEL_LINK } from '@shared/constants/accessibility/ARIA_LABEL';
import { HStack, Image, VStack } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { Introduction } from './components/Introduction';

const LandingPage = () => {
  const device = useDeviceType();
  const theme = useTheme();

  return (
    <HStack>
      <VStack align={device === 'desktop' ? 'start' : 'center'} spacing="8rem">
        <a href="/" aria-label={ARIA_LABEL_LINK.STAT}>
          <AppLogoTitle color={theme.colors.mono.absolute.white} />
        </a>
        <Introduction />
        <LoginButtonContainer>
          <FtLoginButton />
          <GoogleLoginButton />
        </LoginButtonContainer>
      </VStack>
      {device === 'desktop' ? (
        <Image
          width={500}
          height={500}
          src={astronaut}
          style={{ marginLeft: '2rem' }}
        />
      ) : null}
    </HStack>
  );
};

const LoginButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  ${mq({
    flexDirection: ['column', 'row', 'row'],
  })}
`;

export default LandingPage;
