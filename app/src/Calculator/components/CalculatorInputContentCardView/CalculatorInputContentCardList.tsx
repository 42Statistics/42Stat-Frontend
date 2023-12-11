import { Fragment } from 'react';

import { Divider } from '@shared/ui-kit';

import type { CalculatorInputContentCardViewProps } from '@/Calculator/components/CalculatorInputContentCardView';
import { CalculatorInputContentCardListItem } from '@/Calculator/components/CalculatorInputContentCardView/CalculatorInputContentCardListItem';
import type { Subject } from '@/Calculator/types/Subject';

type CalculatorInputContentCardListProps =
  CalculatorInputContentCardViewProps & {
    list: Subject[];
  };

export const CalculatorInputContentCardList = ({
  list,
  ...props
}: CalculatorInputContentCardListProps) => {
  return (
    <>
      {list.map((item, index) => (
        <Fragment key={index}>
          <CalculatorInputContentCardListItem
            item={item}
            index={index}
            {...props}
          />
          {index !== list.length - 1 && <Divider />}
        </Fragment>
      ))}
    </>
  );
};
