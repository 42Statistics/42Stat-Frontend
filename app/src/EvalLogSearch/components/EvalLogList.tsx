import { EvalLog, TeamEvalLog } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';
import { EvalLogItem } from './EvalLogItem';

type EvalLogListProps = {
  list: (EvalLog | TeamEvalLog)[];
};

export const EvalLogList = ({ list }: EvalLogListProps) => {
  return (
    <VStack as="ul" w="100%" spacing="1.6rem">
      {list.map((item) => (
        <EvalLogItem key={item.id} element={item} />
      ))}
    </VStack>
  );
};
