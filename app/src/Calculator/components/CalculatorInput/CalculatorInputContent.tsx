import { useAtomValue } from 'jotai';

import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import {
  emptySubject,
  subjectListAtom,
} from '@/Calculator/atoms/subjectListAtom';
import { CalculatorInputContentCardView } from '@/Calculator/components/CalculatorInputContentCardView';
import { CalculatorInputContentTableView } from '@/Calculator/components/CalculatorInputContentTableView';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import type { Subject } from '@/Calculator/types/Subject';

export const CalculatorInputContent = ({
  handleSubjectAdd,
}: {
  handleSubjectAdd: () => void;
}) => {
  const subjectList = useAtomValue(subjectListAtom);
  const { updateSubjectList } = useSubjectList();
  const device = useDeviceType();

  const handleSubjectListChange = (subjectList: Subject[]) => {
    updateSubjectList(subjectList);
  };

  const handleSubjectDelete = (index: number) => {
    if (subjectList.length === 1) {
      updateSubjectList([emptySubject(0)]);
      return;
    }

    subjectList.splice(index, 1);
    updateSubjectList(subjectList);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const name = e.target.name as keyof typeof subjectList;
    const inputValue = Number(e.target.value);
    const prevValue = subjectList.find(({ id }) => id === index)?.score ?? 100;

    const validValue = isValidValue(inputValue) ? inputValue : prevValue;

    e.target.value = validValue.toString();

    const updatedSubjectList = subjectList.map((subject) => {
      if (subject.id === index) {
        return {
          ...subject,
          [name]: validValue,
        };
      }

      return subject;
    });

    updateSubjectList(updatedSubjectList);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const checked = e.target.checked;
    const updatedSubjectList = subjectList.map((subject) => {
      if (subject.id === index) {
        return {
          ...subject,
          bonus: checked,
        };
      }
      return subject;
    });
    updateSubjectList(updatedSubjectList);
  };

  return (
    <>
      {device === 'mobile' ? (
        <CalculatorInputContentCardView
          onSubjectListChange={handleSubjectListChange}
          onSubjectAdd={handleSubjectAdd}
          onSubjectDelete={handleSubjectDelete}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
        />
      ) : (
        <CalculatorInputContentTableView
          onSubjectListChange={handleSubjectListChange}
          onSubjectAdd={handleSubjectAdd}
          onSubjectDelete={handleSubjectDelete}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
    </>
  );
};

const isValidValue = (value: number): boolean => {
  return !isNaN(value) && value >= 0 && value <= 125;
};
