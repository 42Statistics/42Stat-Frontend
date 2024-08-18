import { useAtomValue } from 'jotai';

import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import {
  emptySubject,
  subjectListAtom,
} from '@/Calculator/atoms/subjectListAtom';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import type { Subject } from '@/Calculator/types/Subject';
import { CalculatorInputContentCardView } from '@/Calculator/components/CalculatorInputContentCardView';
import { CalculatorInputContentTableView } from '@/Calculator/components/CalculatorInputContentTableView';

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
    const value = Number(e.target.value);
    const name = e.target.name as keyof typeof subjectList;

    if (value < 0 || value > 125) {
      return;
    }

    e.target.value = value.toString();

    const updatedSubjectList = subjectList.map((subject) => {
      if (subject.id === index) {
        return {
          ...subject,
          [name]: value,
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
