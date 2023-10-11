import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import type {
  Subject,
  TableRowList,
} from '@/Calculator/types/OrderItemButtonGroup';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { VStack, Body1MediumText } from '@shared/ui-kit';

import { CalculatorInputContentCardView } from '../CalculatorInputContentCardView';
import { CalculatorInputContentTableView } from '../CalculatorInputContentTableView';

export const CalculatorInputContent = () => {
  const { subjectList, updateSubjectList } = useSubjectList();
  const device = useDeviceType();

  const handleSubjectListChange = (subjectList: TableRowList[]) => {
    updateSubjectList(subjectList as Subject[]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const name = e.target.name as keyof typeof subjectList;
    const id = parseInt(e.target.id);
    if (value < 0 || value > 125) return;
    const updatedSubjectList = subjectList.map((subject) => {
      if (subject.id === id) {
        return {
          ...subject,
          [name]: value,
        };
      }
      return subject;
    });
    updateSubjectList(updatedSubjectList);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const id = parseInt(e.target.id);
    const updatedSubjectList = subjectList.map((subject) => {
      if (subject.id === id) {
        return {
          ...subject,
          bonus: checked,
        };
      }
      return subject;
    });
    updateSubjectList(updatedSubjectList);
  };

  const handleCheckboxChangeByIndex = (index: number) => {
    const newSubjectList = subjectList.map((subject, i) => {
      if (i === index) {
        return {
          ...subject,
          bonus: !subject.bonus, // Toggle bonus value
        };
      }
      return subject;
    });
    updateSubjectList(newSubjectList);
  };

  return (
    <>
      {device === 'mobile' ? (
        <CalculatorInputContentCardView
          onSubjectListChange={handleSubjectListChange}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChangeByIndex}
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
