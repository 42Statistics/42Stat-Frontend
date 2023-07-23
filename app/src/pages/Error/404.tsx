import { ROUTES } from '@/constants/ROUTES';
import {
  Button,
  Image,
  VStack,
  WhiteH1BoldText,
  WhiteText,
} from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { Seo } from '@components/elements/Seo';
import { withHead } from '@hoc/withHead';
import marvin_depressed from '@shared/assets/marvin-depressed.gif';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const statusCode = 404;
  const statusText = 'Not Found';

  const navigate = useNavigate();

  return (
    <VStack w="100%" h="100%" spacing="6rem">
      <Link to={ROUTES.ROOT}>
        <AppLogoTitle size="sm" color="white" />
      </Link>
      <WhiteH1BoldText>
        {statusCode} {statusText}
      </WhiteH1BoldText>
      <VStack spacing="0.5rem">
        <WhiteText>죄송합니다. 페이지를 찾을 수 없습니다. </WhiteText>
        <WhiteText>존재하지 않는 주소를 입력하셨거나, </WhiteText>
        <WhiteText>
          요청하신 페이지의 주소가 변경 또는 삭제되어 찾을 수 없습니다.
        </WhiteText>
      </VStack>
      <Image width="400px" src={marvin_depressed} alt="marvin-depressed" />
      <Button onClick={() => navigate(ROUTES.ROOT)}>홈으로 돌아가기</Button>
    </VStack>
  );
};

const Head = () => {
  const statusText = 'Not Found';

  return <Seo title={statusText} />;
};

export default withHead(NotFoundPage, Head);
