import {
  H2BoldText,
  Writable,
  VStack,
  HStack,
  Text,
  CaptionText,
  Body1BoldText,
  Divider,
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
import { Fragment } from 'react';

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
          <HStack justify="start" align="baseline" spacing="1rem">
            <H2BoldText>프로젝트 목록</H2BoldText>
            <CaptionText>최대 20개</CaptionText>
          </HStack>
          <Button onClick={onAddClick}>추가</Button>
        </HStack>
        <Divider color={theme.colors.mono.black} />
      </VStack>
      {subjectList.map((subject, index) => (
        <Fragment key={subject.id}>
          <SubjectLayout>
            <VStack align="start" justify="start" w="100%" spacing="0.5rem">
              <HStack justify="space-between" w="100%">
                <TextLayout>
                  <Text color={theme.colors.primary.default}>
                    프로젝트 검색
                  </Text>
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
            <HStack justify="space-between" spacing="1rem">
              <VStack align="start" w="100%" spacing="0.5rem">
                <TextLayout>
                  <Text color={theme.colors.primary.default}>점수</Text>
                </TextLayout>
                <InputLayout>
                  <Writable
                    type="number"
                    min="0"
                    max="125"
                    id={index.toString()}
                    name="score"
                    onChange={handleInputChange}
                    value={subject.score}
                  />
                </InputLayout>
              </VStack>
              <VStack align="start" w="100%" spacing="0.5rem">
                <TextLayout>
                  <Text color={theme.colors.primary.default}>
                    코알리숑 보너스
                  </Text>
                </TextLayout>
                <VStack w="100%" h="4rem">
                  <CustomCheckbox
                    label="Bonus"
                    onClick={() => onCheckboxChange(index)}
                    checked={subject.bonus}
                  />
                </VStack>
              </VStack>
            </HStack>
            <InfoLayout>
              <VStack>
                <Text color={theme.colors.primary.default}>경험치</Text>
                <Body1BoldText color={theme.colors.mono.black}>
                  {subject.expEdited?.toLocaleString()}
                </Body1BoldText>
              </VStack>
              <VStack>
                <Text color={theme.colors.primary.default}>통과 레벨</Text>
                <Body1BoldText color={theme.colors.mono.black}>
                  {subject.finishLevel}
                </Body1BoldText>
              </VStack>
              <VStack>
                <Text color={theme.colors.primary.default}>블랙홀</Text>
                <Body1BoldText color={theme.colors.mono.black}>
                  +{subject.blackhole}일
                </Body1BoldText>
              </VStack>
            </InfoLayout>
          </SubjectLayout>
          {index !== subjectList.length - 1 && <Divider />}
        </Fragment>
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
  margin: 1rem 0 0 0;
`;

const TextLayout = styled.div`
  padding: 0 0 0 0.7rem;
`;

const SubjectLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3rem 0;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.mono.black};
`;

export default CalculatorInputMobile;
