import type { TableRowList } from '@/Calculator/types/OrderItemButtonGroup';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { useAtomValue } from 'jotai';
import { CalculatorInputContentCardList } from './CalculatorInputContentCardList';

export type CalculatorInputContentCardViewProps = {
  onSubjectListChange: (subjectList: TableRowList[]) => void;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onCheckboxChange: (index: number) => void; // FIXME: Change to React.ChangeEventHandler<HTMLInputElement> when refactoring
};

export const CalculatorInputContentCardView = (
  props: CalculatorInputContentCardViewProps,
) => {
  const subjectList = useAtomValue(subjectListAtom);

  return <CalculatorInputContentCardList list={subjectList} {...props} />;
};
