import { EvalLog, TeamEvalLog } from '@shared/__generated__/graphql';
import { HStack, VStack } from '@shared/ui-kit';
import { forwardRef } from 'react';
import { EvalLogListItem } from './EvalLogListItem';

type EvalLogListProps = {
  list: (EvalLog | TeamEvalLog)[];
  refIndex?: number | null;
};

export const EvalLogList = forwardRef(
  (
    { list, refIndex }: EvalLogListProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <VStack as="ul" w="100%" spacing="1.6rem">
        {list.map((item, index) => {
          if (index === refIndex) {
            return (
              <HStack as="li" key={item.id} ref={ref} w="100%">
                <EvalLogListItem element={item} />
              </HStack>
            );
          }

          return (
            <HStack as="li" key={item.id} w="100%">
              <EvalLogListItem element={item} />
            </HStack>
          );
        })}
      </VStack>
    );
  },
);

EvalLogList.displayName = 'EvalLogList';
