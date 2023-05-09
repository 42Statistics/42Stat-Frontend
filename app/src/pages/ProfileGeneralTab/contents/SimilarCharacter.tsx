import { H3Text, HStack, VStack } from '@/components/common';

export const SimilarCharacter = () => {
  const characterImgUrl =
    'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006601.png';
  const characterName = '알통몬';

  return (
    <HStack h="100%">
      <VStack h="100%" spacing="3rem">
        <img width="200px" src={characterImgUrl} />
        <H3Text>{characterName}</H3Text>
      </VStack>
    </HStack>
  );
};
