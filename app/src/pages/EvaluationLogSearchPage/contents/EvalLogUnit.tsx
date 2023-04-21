import { GetEvalLogsQuery } from '@/__generated__/graphql';
import { HStack, Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type EvalLogUnitProps = {
  data: GetEvalLogsQuery['getEvalLogs'][0];
};

export const EvalLogUnit = ({ data }: EvalLogUnitProps) => {
  const theme = useTheme();
  const { header, correctorReview, correctedsReview } = data;
  return (
    <VStack w="100%" align="start" spacing="2rem">
      <HStack>
        <Text
          color={theme.colors.primary.default}
          fontWeight={theme.fonts.weight.bold}
        >
          {header.corrector.login}
        </Text>
        <Text>님이&nbsp;</Text>
        <Text
          color={theme.colors.primary.default}
          fontWeight={theme.fonts.weight.bold}
        >
          {header.teamPreview.name}
        </Text>
        <Text>을&nbsp;</Text>
        <Text fontWeight={theme.fonts.weight.bold}>{header.beginAt}</Text>
        <Text>에 평가하였습니다</Text>
        {/* 
        TODO: 혹시 이부분 업적 카드?로 만들어서 같이 띄워줄수도
        <div>{header.flag.name}</div>
        <div>{header.flag.isPositive ? 'pass' : 'fail'}</div> */}
      </HStack>
      <VStack w="100%" align="start" spacing="1rem">
        <HStack w="100%" css={{ justifyContent: 'flex-start' }}>
          <HStack w="13rem">
            <ScoreBox>{correctorReview.mark}%</ScoreBox>
          </HStack>
          <div css={{ width: '100%' }}>
            <Text>{correctorReview.review}</Text>
          </div>
        </HStack>
        <HStack w="100%" css={{ justifyContent: 'flex-start' }}>
          <HStack w="13rem">
            <ScoreBox>{correctedsReview.mark}/5</ScoreBox>
          </HStack>
          <div css={{ width: '100%' }}>
            <Text>{correctedsReview.review}</Text>
          </div>
        </HStack>
      </VStack>
    </VStack>
  );
};

const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.default};
  letter-spacing: 0.2rem;
`;
