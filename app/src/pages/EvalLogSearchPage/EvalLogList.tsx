import { EvalLog } from '@/__generated__/graphql';
import { VStack } from '@/components/common';
import { isDefined } from '@/utils/isDefined';
import { EvalLogItem } from './EvalLogItem';

export const EvalLogList = ({ list = [] }: { list?: (EvalLog | null)[] }) => {
  return (
    <VStack as="ul" w="100%" spacing="2rem">
      {list.filter(isDefined).map((element, idx) => (
        <EvalLogItem key={idx} element={element} />
      ))}
    </VStack>
  );
};
