import {
  AccentBoldText,
  AccentH3Text,
  Clickable,
  HStack,
  Image,
  Text,
  VStack,
} from '@/components/common';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export const InternalServerErrorPage = () => {
  const statusCode = 500;
  const statusText = 'Internal Server Error';
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{statusText} | 42Stat</title>
      </Helmet>
      <VStack w="100%" h="100%" spacing="4rem">
        <HStack align="baseline" spacing="2rem">
          <AccentBoldText fontSize="6rem">{statusCode}</AccentBoldText>
          <AccentH3Text>{statusText}</AccentH3Text>
        </HStack>
        <Image
          width="100px"
          src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039301.png"
        />
        <Clickable
          onClick={() => navigate('/')}
          element={<Text>홈으로 돌아가기</Text>}
        />
      </VStack>
    </>
  );
};
