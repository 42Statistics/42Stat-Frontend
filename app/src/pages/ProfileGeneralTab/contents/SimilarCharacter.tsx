import { H3Text, Image, VStack } from '@/components/common';
import { DashboardContent } from '@/components/templates/Dashboard';

export const SimilarCharacter = () => {
  const title = '이 유저를 캐릭터로 표현한다면?';
  const description = '과제 점수, 레벨 증가, 접속 시간, 평가 횟수 기준';

  const characterImgUrl =
    'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006601.png';
  const characterName = '알통몬';

  return (
    <DashboardContent title={title} description={description}>
      <VStack h="100%" spacing="3rem">
        <Image width="200px" src={characterImgUrl} />
        <H3Text>{characterName}</H3Text>
      </VStack>
    </DashboardContent>
  );
};
