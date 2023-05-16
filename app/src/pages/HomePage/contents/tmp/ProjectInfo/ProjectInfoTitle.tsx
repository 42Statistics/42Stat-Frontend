import {
  AccentCaptionText,
  BoldText,
  PrimaryText,
  Text,
  VStack,
} from '@/components/common';

type ProjectInfoTitleProps = {
  name: string;
};

export const ProjectInfoTitle = ({ name }: ProjectInfoTitleProps) => {
  return (
    <VStack spacing="4rem" align="start" css={{ margin: '0 2rem' }}>
      <VStack align="start">
        <PrimaryText>1서클</PrimaryText>
        <BoldText fontSize="4rem">{name}</BoldText>
      </VStack>
      <VStack align="start" spacing="0.5rem">
        <Text>나만의 라이브러리 만들기</Text>
        <AccentCaptionText>서브젝트 보기</AccentCaptionText>
      </VStack>
    </VStack>
  );
};
