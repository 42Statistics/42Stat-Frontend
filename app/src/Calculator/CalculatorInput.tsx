import {
  VStack,
  HStack,
  H2BoldText,
  Body1Text,
  PrimaryMediumText,
  Writable,
  CheckBox,
} from '@shared/ui-kit';
import styled from '@emotion/styled';
import { useAtom, useSetAtom } from 'jotai';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { ProjectSpotlight } from '@/Calculator/ProjectSpotlight';
import { calculatorPropsAtom } from './atoms/calculatorPropsAtom';
import { calculateSubjectList } from '@/Calculator/utils/calculateSubjectList';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { OrderItemButton } from '@/Calculator/OrderItemButton';
import { TableRowList, Subject } from '@/Calculator/types/orderItemButton';
import { Button } from '@shared/ui-kit';
import { useTheme } from '@emotion/react';

const CalculatorInput = () => {
  const [subjectList, setSubjectList] = useAtom(subjectListAtom);
  const [calculatorProps] = useAtom(calculatorPropsAtom);
  const setCalculatorDialogAtom = useSetAtom(calculatorDialogAtom);
  const currentLevel = calculatorProps.currentLevel;
  const theme = useTheme();

  const heads = [
    '프로젝트명',
    '경험치',
    '점수',
    '코알리숑 보너스',
    '블랙홀',
    '통과시 레벨',
    '과제 추가',
  ];

  const onListChange = (subjectList: TableRowList[]) => {
    const calculatedSubjectList = calculateSubjectList({
      subjectList: subjectList as Subject[],
      currentLevel: currentLevel,
    });
    setSubjectList(calculatedSubjectList);
  };

  const onAddClick = () => {
    if (subjectList.length >= 20) {
      setCalculatorDialogAtom({
        isOpen: true,
        description: '과제는 최대 20개까지 추가 가능합니다.',
      });
      return;
    }
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
        </HStack>
        <hr style={{ width: '100%', border: 'solid 0.5px grey' }} />
      </VStack>
      <Table>
        <thead>
          <tr>
            {heads.map((head, index) => (
              <th key={index}>
                {index === heads.length - 1 ? (
                  <Button onClick={onAddClick}>{head}</Button>
                ) : (
                  <PrimaryMediumText>{head}</PrimaryMediumText>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subjectList.map(
            ({ name, exp, score, bonus, blackhole, finishLevel }, index) => (
              <tr key={index}>
                <td>
                  <ProjectSpotlight index={index} keyword={name} />
                </td>
                <td>{exp}</td>
                <td>
                  <InputLayout>
                    <Writable
                      type="number"
                      min="0"
                      max="300"
                      id={index.toString()}
                      name="score"
                      onChange={handleInputChange}
                      value={score}
                      style={{ width: '4rem' }}
                    />
                  </InputLayout>
                </td>
                <td>
                  <CheckBox
                    id={index.toString()}
                    type="checkbox"
                    name="bonus"
                    onChange={onCheckBoxChange}
                    checked={bonus}
                  />
                </td>
                <td>
                  <Body1Text color={theme.colors.accent.default}>
                    +{blackhole}일
                  </Body1Text>
                </td>
                <td>
                  <Body1Text color={theme.colors.evaluation.pass}>
                    {finishLevel}
                  </Body1Text>
                </td>
                <td>
                  <OrderItemButton
                    tableRowList={subjectList}
                    index={index}
                    onListChange={onListChange}
                  />
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </>
  );
};

const Table = styled.table`
  width: 98%;
  white-space: nowrap;

  th {
    top: 0;
    text-align: center;
    flex-wrap: wrap;
    padding: 0.8rem 1rem;
    vertical-align: middle;
    border-bottom: solid 1px ${({ theme }) => theme.colors.mono.gray300};
  }

  td {
    max-width: 300px;
    overflow-x: hidden;
    text-align: center;
    padding: 0.6rem 1rem;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.mono.black};
  }

  tbody tr {
    transition: all 0.2s;
  }

  td:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radius.xs};
    border-bottom-left-radius: ${({ theme }) => theme.radius.xs};
  }

  td:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radius.xs};
    border-bottom-right-radius: ${({ theme }) => theme.radius.xs};
  }
`;

const InputLayout = styled.div`
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;

export default CalculatorInput;
