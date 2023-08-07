import dont_panic from '@/Error/assets/dont-panic.webp';
import { useTheme } from '@emotion/react';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/ROUTES';
import { ARIA_LABEL_LINK } from '@shared/constants/accessibility/ARIA_LABEL';
import { withHead } from '@shared/hoc/withHead';
import {
  Button,
  HStack,
  Image,
  VStack,
  WhiteBody1Text,
  WhiteH1BoldText,
} from '@shared/ui-kit';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const statusCode = 404;
  const statusText = 'Not Found';
  const theme = useTheme();

  return (
    <VStack spacing="6rem">
      <Link to={ROUTES.ROOT} aria-label={ARIA_LABEL_LINK.STAT}>
        <AppLogoTitle size="sm" color="white" />
      </Link>
      <VStack spacing="2rem">
        <HStack align="baseline" spacing="1rem">
          <WhiteH1BoldText>{statusCode}</WhiteH1BoldText>
          <WhiteBody1Text>{statusText}</WhiteBody1Text>
        </HStack>
        <Image width={200} src={dont_panic} alt="" />
      </VStack>
      <Link to={ROUTES.ROOT}>
        <Button
          backgroundColor={theme.colors.mono.white}
          color={theme.colors.mono.black}
        >
          홈으로 돌아가기
        </Button>
      </Link>
    </VStack>
  );
};

const Head = () => {
  const statusText = 'Not Found';

  return <Seo title={statusText} />;
};

export default withHead(NotFoundPage, Head);
