import animated_ship from '@assets/animated-ship.gif';
import { Image, StartButton, VStack } from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { useTheme } from '@emotion/react';
import { withHead } from '@hoc/withHead';
import { ROUTES } from '@routes/ROUTES';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; // FIXME: import 말고 Styled Components 방식으로 Slick 적용
import { Introduction } from './Introduction';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <VStack h="100%" spacing="10rem">
      <a href="/">
        <AppLogoTitle size="md" color={theme.colors.mono.white} />
      </a>
      <Introduction />
      <Image src={animated_ship} alt="우주를 떠다니는 배" width="200px" />
      <VStack spacing="2rem">
        <Link to={ROUTES.LOGIN}>
          <StartButton>지금 시작하기 🚀</StartButton>
        </Link>
      </VStack>
    </VStack>
  );
};

export default withHead(LandingPage);
