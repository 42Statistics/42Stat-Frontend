import { Fragment } from 'react';

import type { Subject } from '@/Calculator/types/OrderItemButtonGroup';
import { Divider } from '@shared/ui-kit';

import type { CalculatorInputContentCardViewProps } from '.';
import { CalculatorInputContentCardListItem } from './CalculatorInputContentCardListItem';

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
