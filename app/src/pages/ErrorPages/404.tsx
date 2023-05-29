import {
  AccentBoldText,
  AccentH3Text,
  HStack,
  Image,
  Text,
  VStack,
} from '@/components/common';
import { Seo } from '@/components/elements/Seo';
import { withHead } from '@/components/hoc/withHead';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const statusCode = 404;
  const statusText = 'Not Found';

  return (
    <>
      <Helmet>
        <title>{statusText} | 42Stat</title>
      </Helmet>
      <VStack w="100%" h="100%" spacing="6rem">
        <HStack align="baseline" spacing="2rem">
          <AccentBoldText fontSize="6rem">{statusCode}</AccentBoldText>
          <AccentH3Text>{statusText}</AccentH3Text>
        </HStack>
        <Image
          width="100px"
          src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005001.png"
        />
        <Link to="/">
          <Text>홈으로 돌아가기</Text>
        </Link>
      </VStack>
    </>
  );
};

const Head = () => {
  const statusText = 'Not Found';

  return <Seo title={statusText} />;
};

export default withHead(NotFoundPage, Head);
