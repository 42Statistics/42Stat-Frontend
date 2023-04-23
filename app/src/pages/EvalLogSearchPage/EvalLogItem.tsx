import { EvalLogs } from '@/__generated__/graphql';
import {
  Clickable,
  HStack,
  Spacer,
  Text,
  VStack,
  center,
} from '@/components/common';
import { dateFormatter, snakeCaseFormatter } from '@/utils/formatters';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const EvalLogItem = ({ element }: { element: EvalLogs }) => {
  const { header, correctorReview, correctedsReview } = element;

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <VStack w="100%" align="start" spacing="2rem">
      <HStack w="100%" spacing="1rem" justify="start" wrap="wrap">
        <HStack justify="start">
          <Clickable
            onClick={() => navigate('/profile/' + header.corrector.login)}
            element={
              <Text
                color={theme.colors.primary.default}
                fontWeight={theme.fonts.weight.bold}
              >
                {header.corrector.login}
              </Text>
            }
          />
          <Text>님이&nbsp;</Text>
          <Text
            color={theme.colors.primary.default}
            fontWeight={theme.fonts.weight.bold}
          >
            {header.teamPreview.name}
          </Text>
          <Text>을&nbsp;</Text>
          <Text fontWeight={theme.fonts.weight.bold}>
            {dateFormatter(header.beginAt, 'xl')}
          </Text>
          <Text>에 평가하였습니다</Text>
        </HStack>
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
        <HStack w="100%" justify="start">
          <HStack w="13rem">
            <ScoreBox>{correctorReview.mark}%</ScoreBox>
          </HStack>
          <div css={{ width: '100%' }}>
            <Text>{correctorReview.review}</Text>
          </div>
        </HStack>
        <HStack w="100%" justify="start">
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
  ${center}
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.default};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

type FlagLabelProps = {
  name: string;
  isPositive: boolean;
};

const FlagLabel = ({ name, isPositive }: FlagLabelProps) => {
  return (
    <FlagLabelLayout isPositive={isPositive}>
      {snakeCaseFormatter(name)}
    </FlagLabelLayout>
  );
};

const FlagLabelLayout = styled.div<{ isPositive: boolean }>`
  ${center}
  background-color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.third.light : theme.colors.secondary.light};
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.third.dark : theme.colors.secondary.dark};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;
