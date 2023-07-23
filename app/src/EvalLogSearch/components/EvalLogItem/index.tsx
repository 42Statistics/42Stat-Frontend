import { Center, HStack, Text, VStack } from '@components/common';
import { EvalLogLabel, EvalLogLabelType } from '@components/common/Label';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { EvalLog } from '@shared/__generated__/graphql';
import { CustomBox } from '@shared/styles/custom/CustomBox';
import { EvalLogItemTitle } from './EvalLogItemTitle';

type EvalLogItemProps = {
  element: EvalLog;
};

export const EvalLogItem = ({ element }: EvalLogItemProps) => {
  const theme = useTheme();
  const { header, correctorReview, correctedsReview } = element;

  return (
    <Layout>
      <EvalLogItemTitle header={header} />
      <VStack w="100%" align="start" spacing="1rem">
        <HStack w="100%">
          <Center w="10rem">
            <CorrectorReviewLabel number={correctorReview.mark} />
          </Center>
          <Text style={{ width: '100%' }}>{correctorReview.review}</Text>
        </HStack>
        <HStack w="100%">
          <Center w="10rem">
            {correctedsReview ? (
              <CorrectedsReviewLabel number={correctedsReview.mark} />
            ) : (
              <CorrectedsReviewLabel isNone />
            )}
          </Center>
          {correctedsReview ? (
            <Text style={{ width: '100%' }}>{correctedsReview.review}</Text>
          ) : (
            <Text color={theme.colors.mono.gray300} style={{ width: '100%' }}>
              아직 피드백을 작성하지 않았습니다.
            </Text>
          )}
        </HStack>
      </VStack>
    </Layout>
  );
};

const Layout = styled(CustomBox)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 3.5rem;
`;

const CorrectorReviewLabel = ({ number }: { number: number }) => {
  const computeType = (number: number): EvalLogLabelType => {
    if (number >= 100) return 'positive';
    if (number >= 80) return 'neutral';
    return 'negative';
  };

  const type = computeType(number);

  return <EvalLogLabel type={type}>{`${String(number)}%`}</EvalLogLabel>;
};

const CorrectedsReviewLabel = ({
  number = 0,
  isNone = false,
}: {
  number?: number; // isNone일 때만 undefined 가능
  isNone?: boolean;
}) => {
  const computeType = (number: number, isNone: boolean): EvalLogLabelType => {
    if (isNone) return 'none';
    if (number >= 5) return 'positive';
    if (number >= 3) return 'neutral';
    return 'negative';
  };

  const type = computeType(number, isNone);

  return (
    <EvalLogLabel type={type}>
      {!isNone ? `${String(number)} / 5` : '- / 5'}
    </EvalLogLabel>
  );
};
