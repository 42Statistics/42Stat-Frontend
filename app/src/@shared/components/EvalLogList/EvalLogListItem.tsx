import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { EvalLog, TeamEvalLog } from '@shared/__generated__/graphql';
import { CorrectedsReviewLabel } from '@shared/components/EvalLogLabel/CorrectedsReviewLabel';
import { CorrectorReviewLabel } from '@shared/components/EvalLogLabel/CorrectorReviewLabel';
import { EvalLogListItemTitle } from '@shared/components/EvalLogList/EvalLogListItemTitle';
import { Center, HStack, Text, VStack } from '@shared/ui-kit';
import { CustomBox } from '@shared/ui-kit-styled';

type EvalLogListItemProps = {
  element: EvalLog | TeamEvalLog;
};

export const EvalLogListItem = ({ element }: EvalLogListItemProps) => {
  const theme = useTheme();
  const { header, correctorReview, correctedsReview } = element;

  return (
    <Layout id={element.id.toString()}>
      <EvalLogListItemTitle header={header} />
      <VStack w="100%" align="start" spacing="1rem">
        <HStack w="100%">
          <Center w="10rem">
            <CorrectorReviewLabel number={correctorReview.mark} />
          </Center>
          <Text style={{ width: '100%', wordBreak: 'break-all' }}>
            {correctorReview.review}
          </Text>
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
            <Text style={{ width: '100%', wordBreak: 'break-all' }}>
              {correctedsReview.review}
            </Text>
          ) : (
            <Text color={theme.colors.mono.gray500} style={{ width: '100%' }}>
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
