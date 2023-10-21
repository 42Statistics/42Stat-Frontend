import styled from '@emotion/styled';

import { MoulinetteEvalLogListItemTitle } from '@/Team/components/MoulinetteEvalLogListItem/MoulinetteEvalLogListItemTitle';
import type { TeamUpload } from '@shared/__generated__/graphql';
import { CorrectorReviewLabel } from '@shared/components/EvalLogLabel/CorrectorReviewLabel';
import { Center, HStack, Text } from '@shared/ui-kit';
import { CustomBox } from '@shared/ui-kit-styled';

type MoulinetteEvalLogListItemProps = {
  item: TeamUpload;
};

export const MoulinetteEvalLogListItem = ({
  item,
}: MoulinetteEvalLogListItemProps) => {
  const { comment, createdAt, finalMark } = item;
  return (
    <Layout>
      <MoulinetteEvalLogListItemTitle createdAt={createdAt} />
      <HStack w="100%">
        <Center w="10rem">
          <CorrectorReviewLabel number={finalMark} />
        </Center>
        <Text style={{ width: '100%' }}>{comment}</Text>
      </HStack>
    </Layout>
  );
};

const Layout = styled(CustomBox)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 3.5rem;
`;
