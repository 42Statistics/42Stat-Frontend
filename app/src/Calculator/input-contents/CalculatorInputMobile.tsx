import {
  H2BoldText,
  Writable,
  CheckBox,
  VStack,
  HStack,
  Body1Text,
  Body1ThinText,
  H3MediumText,
} from '@shared/ui-kit';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { ProjectSpotlight } from '@/Calculator/ProjectSpotlight';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { OrderItemButton } from '@/Calculator/input-contents/OrderItemButton';
import { TableRowList, Subject } from '@/Calculator/types/orderItemButton';
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

  const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <>
      <VStack w="100%" align="start" spacing="1rem">
        <HStack w="100%" justify="space-between">
          <H2BoldText>프로젝트 목록</H2BoldText>
          <Button onClick={onAddClick}>추가</Button>
        </HStack>
        <hr style={{ width: '100%', border: 'solid 0.5px grey' }} />
      </VStack>
      {subjectList.map((subject, index) => (
        <Layout key={subject.id}>
          <HStack w="100%" justify="space-between">
            <H3MediumText>프로젝트명: {subject.name}</H3MediumText>
            <OrderItemButton
              tableRowList={subjectList}
              index={index}
              onListChange={onListChange}
            />
          </HStack>
          <HStack justify="start" w="100%" spacing="5rem">
            <VStack align="start" justify="start">
              <TextLayout>
                <Body1ThinText>프로젝트 검색</Body1ThinText>
              </TextLayout>
              <ProjectSpotlight
                index={index}
                keyword={subject.name}
                width="15rem"
              />
            </VStack>
            <VStack align="start" justify="start">
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
                  style={{ width: '8rem' }}
                />
              </InputLayout>
            </VStack>
          </HStack>
          <HStack justify="space-between" w="100%">
            <HStack spacing="2rem">
              <VStack>
                <Body1ThinText>코알리숑</Body1ThinText>
                <Body1ThinText>보너스</Body1ThinText>
              </VStack>
              <CheckBox
                id={index.toString()}
                type="checkbox"
                name="bonus"
                onChange={onCheckBoxChange}
                checked={subject.bonus}
              />
            </HStack>
            <VStack>
              <Body1ThinText>경험치</Body1ThinText>
              <Body1Text>{subject.exp}</Body1Text>
            </VStack>
            <VStack>
              <Body1ThinText>통과 시 레벨</Body1ThinText>
              <Body1Text color={theme.colors.evaluation.pass}>
                {subject.finishLevel}
              </Body1Text>
            </VStack>
            <VStack>
              <Body1ThinText>블랙홀 증가 일수</Body1ThinText>
              <Body1Text color={theme.colors.accent.default}>
                +{subject.blackhole}일
              </Body1Text>
            </VStack>
          </HStack>
          <hr />
        </Layout>
      ))}
    </>
  );
};

const InputLayout = styled.div`
  padding: 0.5rem;
  margin: 0.2rem;
  width: 10rem;
  height: 2.8rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;

const TextLayout = styled.div`
  padding: 0 0 0 0.7rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.mono.black};
`;

export default CalculatorInputMobile;
