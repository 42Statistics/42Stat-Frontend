import {
  AccentBoldText,
  AccentH3Text,
  Clickable,
  HStack,
  Image,
  VStack,
  WhiteText,
} from '@/components/common';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const statusCode = 404;
  const statusText = 'Not Found';
  const navigate = useNavigate();

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
        <Clickable
          onClick={() => navigate('/')}
          element={<WhiteText>홈으로 돌아가기</WhiteText>}
        />
      </VStack>
    </>
  );
};
