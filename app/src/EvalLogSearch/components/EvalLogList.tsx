import { EvalLogEdge } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';
import { EvalLogItem } from './EvalLogItem';

type EvalLogListProps = {
  evalLogEdges: EvalLogEdge[];
};

export const EvalLogList = ({ evalLogEdges }: EvalLogListProps) => {
  return (
    <VStack as="ul" w="100%" spacing="1rem">
      {evalLogEdges.map(({ node }) => (
        <EvalLogItem key={node.id} element={node} />
      ))}
    </VStack>
  );
};
