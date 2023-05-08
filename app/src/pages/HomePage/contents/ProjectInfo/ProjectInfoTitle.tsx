import { PrimaryText, Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';

type ProjectInfoTitleProps = {
  name: string;
};

export const ProjectInfoTitle = ({ name }: ProjectInfoTitleProps) => {
  const theme = useTheme();

  return (
    <VStack spacing="4rem" align="start" css={{ margin: '0 2rem' }}>
      <VStack align="start">
        <PrimaryText>1서클</PrimaryText>
        <Text fontSize="4rem" fontWeight={theme.fonts.weight.bold}>
          {name}
        </Text>
      </VStack>
      <VStack align="start" spacing="0.5rem">
        <Text>나만의 라이브러리 만들기</Text>
        <Text
          fontSize={theme.fonts.size.caption}
          color={theme.colors.accent.default}
        >
          서브젝트 보기
        </Text>
      </VStack>
    </VStack>
  );
};
