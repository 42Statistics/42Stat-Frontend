import { GetEvalLogsQuery } from '@/__generated__/graphql';
import { HStack, Spacer, Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type EvalLogUnitProps = {
  data: GetEvalLogsQuery['getEvalLogs'][0];
};

export const EvalLogUnit = ({ data }: EvalLogUnitProps) => {
  const theme = useTheme();
  const { header, correctorReview, correctedsReview } = data;
  return (
    <VStack align="start" spacing="2rem">
      <HStack spacing="1rem">
        <HStack>
          <Text
            color={theme.colors.primary.default}
            fontWeight={theme.fonts.weight.bold}
          >
            {header.corrector.login}
          </Text>
          <Text>님이</Text>
        </HStack>
        <HStack>
          <Text
            color={theme.colors.primary.default}
            fontWeight={theme.fonts.weight.bold}
          >
            {header.teamPreview.name}
          </Text>
          <Text>을</Text>
        </HStack>
        <HStack>
          <Text fontWeight={theme.fonts.weight.bold}>{header.beginAt}</Text>
          <Text>에</Text>
        </HStack>
        <Text>평가하였습니다</Text>
        {/* 
        TODO: 혹시 이부분 업적 카드?로 만들어서 같이 띄워줄수도
        <div>{header.flag.name}</div>
        <div>{header.flag.isPositive ? 'pass' : 'fail'}</div> */}
      </HStack>
      <VStack align="center" spacing="2rem">
        <HStack spacing="1rem">
          <LogLayout>
            <ScoreBox>{correctorReview.mark}%</ScoreBox>
          </LogLayout>
          <Spacer />
          <div>
            <Text>{correctorReview.review}</Text>
          </div>
        </HStack>
        <HStack spacing="1rem">
          <LogLayout>
            <ScoreBox>{correctedsReview.mark}/5</ScoreBox>
          </LogLayout>
          <Spacer />
          <div>
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

const LogLayout = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
