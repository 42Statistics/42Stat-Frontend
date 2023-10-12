import { useAtomValue } from 'jotai';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import type { Subject } from '@/Calculator/types/Subject';
import { Body1MediumText, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { CalculatorInputContentCardView } from '../CalculatorInputContentCardView';
import { CalculatorInputContentTableView } from '../CalculatorInputContentTableView';

export const CalculatorInputContent = () => {
  const subjectList = useAtomValue(subjectListAtom);
  const { updateSubjectList } = useSubjectList();
  const device = useDeviceType();

  const handleSubjectListChange = (subjectList: Subject[]) => {
    updateSubjectList(subjectList);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = Number(e.target.value);
    const name = e.target.name as keyof typeof subjectList;
    if (value < 0 || value > 125) return;
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
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
        />
      ) : (
        <CalculatorInputContentTableView
          onSubjectListChange={handleSubjectListChange}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
      {subjectList.length === 0 && (
        <VStack h="5rem">
          <Body1MediumText>프로젝트를 추가하세요</Body1MediumText>
        </VStack>
      )}
    </>
  );
};
