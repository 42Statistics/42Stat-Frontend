import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import type { TableRowList } from '@/Calculator/types/OrderItemButtonGroup';

import { CalculatorInputContentCardList } from './CalculatorInputContentCardList';

export type CalculatorInputContentCardViewProps = {
  onSubjectListChange: (subjectList: TableRowList[]) => void;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onCheckboxChange: (index: number) => void; // FIXME: Change to React.ChangeEventHandler<HTMLInputElement> when refactoring
};

export const CalculatorInputContentCardView = (
  props: CalculatorInputContentCardViewProps,
) => {
  const { subjectList } = useSubjectList();

  return <CalculatorInputContentCardList list={subjectList} {...props} />;
};
