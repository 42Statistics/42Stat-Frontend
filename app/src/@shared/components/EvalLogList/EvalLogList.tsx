import { EvalLog, TeamEvalLog } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';
import { EvalLogListItem } from './EvalLogListItem';

type EvalLogListProps = {
  list: (EvalLog | TeamEvalLog)[];
};

export const EvalLogList = ({ list }: EvalLogListProps) => {
  return (
    <VStack as="ul" w="100%" spacing="1.6rem">
      {list.map((item) => (
        <EvalLogListItem key={item.id} element={item} />
      ))}
    </VStack>
  );
};
