import {
  H2BoldText,
  Writable,
  VStack,
  HStack,
  Body1Text,
  Body1ThinText,
  H3MediumText,
} from '@shared/ui-kit';
import { CustomCheckbox } from '@shared/ui-kit-styled';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { ProjectSpotlight } from '@/Calculator/ProjectSpotlight';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { OrderItemButton } from '@/Calculator/input-contents/OrderItemButton';
import { TableRowList, Subject } from '@/Calculator/types/OrderItemButton';
import { Button } from '@shared/ui-kit';
import { useTheme } from '@emotion/react';

const CalculatorInputMobile = () => {
  const { subjectList, updateSubjectList } = useSubjectList();
  const setCalculatorDialogAtom = useSetAtom(calculatorDialogAtom);
  const theme = useTheme();

  const onListChange = (subjectList: TableRowList[]) => {
    updateSubjectList(subjectList as Subject[]);
  };

  const onAddClick = () => {
    if (subjectList.length >= 20) {
      setCalculatorDialogAtom({
        isOpen: true,
        description: '과제는 최대 20개까지 추가 가능합니다.',
      });
      return;
    }
    updateSubjectList([
      ...subjectList,
      {
        id: subjectList.length,
        name: '',
        exp: 0,
        expEdited: 0,
        score: 100,
        blackhole: 0,
        bonus: false,
        startLevel: 0,
        finishLevel: 0,
      },
    ]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const name = e.target.name as keyof typeof subjectList;
    const id = parseInt(e.target.id);
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

  const onCheckboxChange = (index: number) => {
    const updatedSubjectList = subjectList.map((subject, i) => {
      if (i === index) {
        return {
          ...subject,
          bonus: !subject.bonus, // Toggle bonus value
        };
      }
      return subject;
    });
    updateSubjectList(updatedSubjectList);
  };

  return (
    <>
      <VStack w="100%" align="start" spacing="1rem">
        <HStack w="100%" justify="space-between">
          <H2BoldText>프로젝트 목록</H2BoldText>
          <Button onClick={onAddClick}>추가</Button>
        </HStack>
        <hr
          style={{
            width: '100%',
            border: `solid 0.5px ${theme.colors.mono.black}`,
          }}
        />
      </VStack>
      {subjectList.map((subject, index) => (
        <SubjectLayout key={subject.id}>
          <HStack justify="start" w="100%">
            <VStack align="start" justify="start" w="100%" spacing="0.5rem">
              <HStack justify="space-between" w="100%">
                <TextLayout>
                  <Body1ThinText>프로젝트 검색</Body1ThinText>
                </TextLayout>
                <OrderItemButton
                  tableRowList={subjectList}
                  index={index}
                  onListChange={onListChange}
                />
              </HStack>
              <ProjectSpotlight
                index={index}
                keyword={subject.name}
                height="4rem"
                isRelative={true}
                spotlightWidth="100%"
              />
            </VStack>
          </HStack>
          <HStack justify="space-between" spacing="1rem">
            <VStack align="start" w="100%" spacing="0.5rem">
              <TextLayout>
                <Body1ThinText>점수</Body1ThinText>
              </TextLayout>
              <InputLayout>
                <Writable
                  type="number"
                  min="0"
                  max="300"
                  id={index.toString()}
                  name="score"
                  onChange={handleInputChange}
                  value={subject.score}
                />
              </InputLayout>
            </VStack>
            <VStack align="start" w="100%" spacing="0.5rem">
              <TextLayout>
                <Body1ThinText>보너스</Body1ThinText>
              </TextLayout>
              <VStack w="100%" h="4rem">
                <CustomCheckbox
                  label="코알리숑 보너스"
                  onClick={() => onCheckboxChange(index)}
                  checked={subject.bonus}
                />
              </VStack>
            </VStack>
          </HStack>
          <InfoLayout>
            <VStack>
              <Body1ThinText>경험치</Body1ThinText>
              <Body1Text>{subject.expEdited}</Body1Text>
            </VStack>
            <VStack>
              <Body1ThinText>통과 레벨</Body1ThinText>
              <Body1Text color={theme.colors.evaluation.pass}>
                {subject.finishLevel}
              </Body1Text>
            </VStack>
            <VStack>
              <Body1ThinText>블랙홀</Body1ThinText>
              <Body1Text color={theme.colors.accent.default}>
                +{subject.blackhole}일
              </Body1Text>
            </VStack>
          </InfoLayout>
          <hr
            style={{
              width: '100%',
              border: `solid 0.5px ${theme.colors.mono.gray400}`,
            }}
          />
        </SubjectLayout>
      ))}
    </>
  );
};

const InputLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.2rem;
  width: 100%;
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;

const InfoLayout = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid ${({ theme }) => theme.colors.mono.gray300};
  padding: 1rem 0;
`;

const TextLayout = styled.div`
  padding: 0 0 0 0.7rem;
`;

const SubjectLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.mono.black};
`;

export default CalculatorInputMobile;
