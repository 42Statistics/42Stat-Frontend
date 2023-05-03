import {
  Clickable,
  HStack,
  SecondaryText,
  Text,
  VStack,
} from '@/components/common';
import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const statusCode = 404;
  const statusText = 'Not Found';
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{statusText} | 42Stat</title>
      </Helmet>
      <VStack w="100%" h="100%" spacing="6rem">
        <HStack align="baseline" spacing="2rem">
          <SecondaryText fontSize="6rem" fontWeight={theme.fonts.weight.bold}>
            {statusCode}
          </SecondaryText>
          <SecondaryText fontSize={theme.fonts.size.h3}>
            {statusText}
          </SecondaryText>
        </HStack>
        <img
          width="100px"
          src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005001.png"
        />
        <Clickable
          onClick={() => navigate('/')}
          element={<Text color={theme.colors.mono.white}>홈으로 돌아가기</Text>}
        />
      </VStack>
    </>
  );
};
