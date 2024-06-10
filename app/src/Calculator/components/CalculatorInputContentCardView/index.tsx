import { useAtomValue } from 'jotai';
import { useTheme } from '@emotion/react';

import { DashedButton, Text } from '@shared/ui-kit';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { CalculatorInputContentCardList } from '@/Calculator/components/CalculatorInputContentCardView/CalculatorInputContentCardList';
import type { Subject } from '@/Calculator/types/Subject';

export type CalculatorInputContentCardViewProps = {
  onSubjectListChange: (subjectList: Subject[]) => void;
  onSubjectAdd: () => void;
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
  const theme = useTheme();

  const handleAddButtonClick = () => {
    props.onSubjectAdd();
  };

  return (
    <>
      <CalculatorInputContentCardList list={subjectList} {...props} />
      <DashedButton onClick={handleAddButtonClick}>
        <Text color={theme.colors.mono.gray400}>프로젝트 추가</Text>
      </DashedButton>
    </>
  );
};
