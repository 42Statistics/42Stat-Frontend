import { HStack, Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';

export const SimilarCharacter = () => {
  const theme = useTheme();
  const characterImgUrl =
    'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006601.png';
  const characterName = '알통몬';

  return (
    <HStack h="100%">
      <VStack h="100%" spacing="3rem">
        <img width="200px" src={characterImgUrl} />
        <Text fontSize={theme.fonts.size.h3}>{characterName}</Text>
      </VStack>
    </HStack>
  );
};
