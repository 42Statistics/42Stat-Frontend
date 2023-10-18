import type { Subject } from '@/Calculator/types/Subject';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { useAtomValue } from 'jotai';
import { CalculatorInputContentCardList } from './CalculatorInputContentCardList';

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
