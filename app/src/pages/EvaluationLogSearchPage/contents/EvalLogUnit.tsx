import { GetEvalLogsQuery } from '@/__generated__/graphql';
import { HStack, Spacer, Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type EvalLogUnitProps = {
  data: GetEvalLogsQuery['getEvalLogs'][0];
};

export const EvalLogUnit = ({ data }: EvalLogUnitProps) => {
  const theme = useTheme();
  const { header, correctorReview, correctedsReview } = data; // FIXME: 타입 에러?
  return (
    <VStack w="100%" align="start" spacing="2rem">
      <HStack w="100%">
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
        <Spacer />
        <HStack spacing="1rem">
          <Text fontWeight={theme.fonts.weight.bold}>
            {header.projectPreview.name}
          </Text>
          <FlagLabel
            name={header.flag.name}
            isPositive={header.flag.isPositive}
          />
        </HStack>
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
            <ScoreBox>{correctedsReview.mark} / 5</ScoreBox>
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

  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.default};
`;

type FlagLabelProps = {
  name: string;
  isPositive: boolean;
};

const getSnakeCase = (str: string) => {
  return str.split(' ').join('_').toLowerCase();
};

const FlagLabel = ({ name, isPositive }: FlagLabelProps) => {
  return (
    <FlagLabelLayout isPositive={isPositive}>
      {getSnakeCase(name)}
    </FlagLabelLayout>
  );
};

const FlagLabelLayout = styled.div<{ isPositive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.third.light : theme.colors.secondary.light};
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.third.dark : theme.colors.secondary.default};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;
