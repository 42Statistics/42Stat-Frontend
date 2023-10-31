import { useAtomValue } from 'jotai';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { CalculatorInputContentCardList } from '@/Calculator/components/CalculatorInputContentCardView/CalculatorInputContentCardList';
import type { Subject } from '@/Calculator/types/Subject';

export type CalculatorInputContentCardViewProps = {
  onSubjectListChange: (subjectList: Subject[]) => void;
  onSubjectDelete: (index: number) => void;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  onCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
};

export const CalculatorInputContentCardView = (
  props: CalculatorInputContentCardViewProps,
) => {
  const subjectList = useAtomValue(subjectListAtom);

  return <CalculatorInputContentCardList list={subjectList} {...props} />;
};
