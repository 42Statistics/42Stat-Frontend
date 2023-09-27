import {
  H2BoldText,
  H3BoldText,
  Writable,
  CheckBox,
  VStack,
  HStack,
  H3MediumText,
} from '@shared/ui-kit';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { ProjectSpotlight } from '@/Calculator/ProjectSpotlight';
import { calculatorPropsAtom } from './atoms/calculatorPropsAtom';
import { calculateSubjectList } from '@/Calculator/utils/calculateSubjectList';
import { OrderItemButton } from '@/Calculator/OrderItemButton';
import { TableRowList, Subject } from '@/Calculator/types/orderItemButton';
import { Button } from '@shared/ui-kit';

const CalculatorInputMobile = () => {
  const [subjectList, setSubjectList] = useAtom(subjectListAtom);
  const [calculatorProps] = useAtom(calculatorPropsAtom);
  const currentLevel = calculatorProps.currentLevel;

  const onListChange = (subjectList: TableRowList[]) => {
    const calculatedSubjectList = calculateSubjectList({
      subjectList: subjectList as Subject[],
      currentLevel: currentLevel,
    });
    setSubjectList(calculatedSubjectList);
  };

  const onAddClick = () => {
    if (subjectList.length >= 20) return; //ToDo: 20개 이상 추가 불가능 안내 추가
    const calculatedSubjectList = calculateSubjectList({
      subjectList: subjectList,
      currentLevel: currentLevel,
      newSubject: {
        id: subjectList.length,
        name: '',
        exp: 0,
        score: 100,
        blackhole: 0,
        bonus: false,
        startLevel: 0,
        finishLevel: 0,
      },
    });
    setSubjectList(calculatedSubjectList);
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
    const calculatedSubjectList = calculateSubjectList({
      subjectList: updatedSubjectList,
      currentLevel: currentLevel,
    });
    setSubjectList(calculatedSubjectList);
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
    const calculatedSubjectList = calculateSubjectList({
      subjectList: updatedSubjectList,
      currentLevel: currentLevel,
    });
    setSubjectList(calculatedSubjectList);
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
                <H3MediumText>프로젝트 검색</H3MediumText>
              </TextLayout>
              <ProjectSpotlight
                index={index}
                keyword={subject.name}
                width="15rem"
              />
            </VStack>
            <VStack align="start" justify="start">
              <TextLayout>
                <H3MediumText>점수</H3MediumText>
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
                <H3MediumText>코알리숑</H3MediumText>
                <H3MediumText>보너스</H3MediumText>
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
              <H3MediumText>경험치</H3MediumText>
              <H3MediumText>{subject.exp}</H3MediumText>
            </VStack>
            <VStack>
              <H3MediumText>통과 시 레벨</H3MediumText>
              <H3MediumText>{subject.finishLevel}</H3MediumText>
            </VStack>
            <VStack>
              <H3MediumText>블랙홀 증가 일수</H3MediumText>
              <H3MediumText>+{subject.blackhole}일</H3MediumText>
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
`;

export default CalculatorInputMobile;
