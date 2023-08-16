import { useTheme } from '@emotion/react';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/ROUTES';
import { ARIA_LABEL_LINK } from '@shared/constants/accessibility/ARIA_LABEL';
import { Button, VStack, WhiteBoldText, WhiteText } from '@shared/ui-kit';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const statusCode = 404;
  const statusText = 'Not Found';
  const theme = useTheme();

  return (
    <>
      <Seo title={statusText} />
      <VStack spacing="6rem">
        <Link to={ROUTES.ROOT} aria-label={ARIA_LABEL_LINK.STAT}>
          <AppLogoTitle size="sm" color="white" />
        </Link>
        <VStack spacing="3rem">
          <WhiteBoldText fontSize="4rem">
            {statusCode} {statusText}
          </WhiteBoldText>
          <VStack spacing="1rem">
            <WhiteText>죄송합니다. 페이지를 찾을 수 없습니다.</WhiteText>
            <WhiteText>존재하지 않는 주소를 입력하셨거나,</WhiteText>
            <WhiteText>
              요청하신 페이지의 주소가 변경 또는 삭제되어 찾을 수 없습니다.
            </WhiteText>
          </VStack>
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
    </>
  );
};

export default NotFoundPage;
