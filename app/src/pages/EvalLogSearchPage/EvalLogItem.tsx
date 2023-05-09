import { EvalLog } from '@/__generated__/graphql';
import {
  BoldText,
  Clickable,
  HStack,
  MediumText,
  PrimaryBoldText,
  PrimaryMediumText,
  Spacer,
  Text,
  VStack,
  center,
} from '@/components/common';
import { dateFormatter, snakeCaseFormatter } from '@/utils/formatters';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import { useNavigate } from 'react-router-dom';

export const EvalLogItem = ({ element }: { element: EvalLog }) => {
  const { header, correctorReview, correctedsReview } = element;

  const navigate = useNavigate();

  return (
    <VStack w="100%" align="start" spacing="2rem">
      <HStack w="100%" justify="start" wrap="wrap">
        <HStack>
          <Clickable
            onClick={() => navigate('/profile/' + header.corrector.login)}
            element={
              <PrimaryBoldText>{header.corrector.login}</PrimaryBoldText>
            }
          />
          <Text>님이&nbsp;</Text>
          <PrimaryBoldText>{header.teamPreview.name}</PrimaryBoldText>
          <Text>을&nbsp;</Text>
        </HStack>
        <HStack>
          <BoldText>{dateFormatter(header.beginAt, 'xl')}</BoldText>
          <Text>에 평가하였습니다</Text>
        </HStack>
        <Spacer />
        <HStack spacing="1rem">
          <BoldText>{header.projectPreview.name}</BoldText>
          <FlagLabel
            name={header.flag.name}
            isPositive={header.flag.isPositive}
          />
        </HStack>
      </HStack>
      <VStack w="100%" align="start" spacing="1rem">
        <HStack w="100%" justify="start">
          <HStack w="13rem">
            <ScoreBox>
              <PrimaryMediumText>{correctorReview.mark}%</PrimaryMediumText>
            </ScoreBox>
          </HStack>
          <div css={{ width: '100%' }}>
            <Text css={{ userSelect: 'auto' }}>{correctorReview.review}</Text>
          </div>
        </HStack>
        <HStack w="100%" justify="start">
          <HStack w="13rem">
            <ScoreBox>
              <PrimaryMediumText>{correctedsReview.mark} / 5</PrimaryMediumText>
            </ScoreBox>
          </HStack>
          <div css={{ width: '100%' }}>
            <Text css={{ userSelect: 'auto' }}>{correctedsReview.review}</Text>
          </div>
        </HStack>
      </VStack>
    </VStack>
  );
};

const ScoreBox = styled.div`
  ${center}
  padding: 0.3rem 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

type FlagLabelProps = {
  name: string;
  isPositive: boolean;
};

const FlagLabel = ({ name, isPositive }: FlagLabelProps) => {
  return (
    <FlagLabelLayout isPositive={isPositive}>
      <MediumText>{snakeCaseFormatter(name)}</MediumText>
    </FlagLabelLayout>
  );
};

const FlagLabelLayout = styled.div<{ isPositive: boolean }>`
  ${center}
  background-color: ${({ theme, isPositive }) =>
    isPositive
      ? rgba(theme.colors.semantic.pass, 0.2)
      : rgba(theme.colors.semantic.fail, 0.2)};
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.semantic.pass : theme.colors.semantic.fail};
  padding: 0.2rem 1rem;
  border-radius: 2rem;
`;
