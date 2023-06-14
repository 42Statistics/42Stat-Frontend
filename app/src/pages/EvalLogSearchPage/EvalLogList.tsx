import { EvalLogEdge } from '@/__generated__/graphql';
import { VStack } from '@components/common';
import { EvalLogItem } from './EvalLogItem';

export const EvalLogList = ({
  evalLogEdges,
}: {
  evalLogEdges: EvalLogEdge[];
}) => {
  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      {evalLogEdges.map(({ node }) => (
        <EvalLogItem key={node.id} element={node} />
      ))}
    </VStack>
  );
};
