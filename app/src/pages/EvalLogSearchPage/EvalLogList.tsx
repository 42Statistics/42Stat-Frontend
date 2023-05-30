import { EvalLog } from '@/__generated__/graphql';
import { VStack } from '@components/common';
import { EvalLogItem } from './EvalLogItem';

export const EvalLogList = ({ evalLogs }: { evalLogs: EvalLog[] }) => {
  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      {evalLogs.map((evalLog, idx) => (
        <EvalLogItem key={idx} element={evalLog} />
      ))}
    </VStack>
  );
};
