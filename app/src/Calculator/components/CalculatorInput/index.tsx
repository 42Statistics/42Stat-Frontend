import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';

import { OrderItemButtonGroup } from '@/Calculator/components/OrderItemButton';
import { ProjectSpotlight } from '@/Calculator/components/ProjectSpotlight';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import { isProjectSpotlightOpenAtom } from '@/Calculator/atoms/isProjectSpotlightOpenAtom';
import type {
  Subject,
  TableRowList,
} from '@/Calculator/types/OrderItemButtonGroup';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import {
  Button,
  CaptionText,
  Checkbox,
  Divider,
  H2BoldText,
  HStack,
  MediumText,
  PrimaryMediumText,
  Spacer,
  VStack,
  Writable,
} from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

export const CalculatorInput = () => {
  const { subjectList, updateSubjectList } = useSubjectList();
  const setCalculatorDialogAtom = useSetAtom(calculatorDialogAtom);
  const setIsProjectSpotlightOpen = useSetAtom(isProjectSpotlightOpenAtom);
  const theme = useTheme();

  const heads = [
    '프로젝트명',
    '경험치',
    '점수',
    '코알리숑 보너스',
    '블랙홀',
    '통과시 레벨',
    '',
  ];

  const handleListChange = (subjectList: TableRowList[]) => {
    updateSubjectList(subjectList as Subject[]);
  };

  const handleResetButtonClick = () => {
    updateSubjectList([
      {
        id: 0,
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
    setIsProjectSpotlightOpen(0);
  };

  const handleAddButtonClick = () => {
    if (subjectList.length >= 20) {
      setCalculatorDialogAtom({
        isOpen: true,
        description: '과제는 최대 20개까지 추가 가능합니다.',
        focus: 0,
      });
      return;
    }
    const firstEmptyIndex = subjectList.findIndex(
      (subject) => subject.name === '',
    );

    setIsProjectSpotlightOpen(
      firstEmptyIndex === -1 ? subjectList.length : firstEmptyIndex,
    );
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
    console.log(value);
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

  return (
    <>
      <VStack w="100%" align="start" spacing="1rem">
        <HStack w="100%" justify="start" align="baseline" spacing="1rem">
          <H2BoldText>프로젝트 목록</H2BoldText>
          <CaptionText>최대 20개</CaptionText>
          <Spacer />
          <Button
            backgroundColor={theme.colors.semantic.warning}
            onClick={handleResetButtonClick}
          >
            초기화
          </Button>
          <Button onClick={handleAddButtonClick}>프로젝트 추가</Button>
        </HStack>
        <Divider color={theme.colors.mono.black} />
      </VStack>
      <Table>
        <thead>
          <tr>
            {heads.map((head, index) => (
              <th key={index}>
                <PrimaryMediumText>{head}</PrimaryMediumText>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subjectList.map(
            (
              { name, expEdited, score, bonus, blackhole, finishLevel },
              index,
            ) => (
              <tr key={index}>
                <td>
                  <ProjectSpotlight
                    index={index}
                    keyword={name}
                    spotlightLeft="1.2rem"
                    spotlightWidth="auto"
                    height="3rem"
                  />
                </td>
                <td>{expEdited?.toLocaleString()}</td>
                <td>
                  <InputLayout>
                    <Writable
                      type="number"
                      min="0"
                      max="125"
                      id={index.toString()}
                      name="score"
                      onChange={handleInputChange}
                      value={score}
                      style={{ width: '4rem' }}
                    />
                  </InputLayout>
                </td>
                <td>
                  <Checkbox
                    id={index.toString()}
                    type="checkbox"
                    name="bonus"
                    onChange={handleCheckboxChange}
                    checked={bonus}
                  />
                </td>
                <td>
                  <MediumText>
                    +{numberWithUnitFormatter(blackhole, '일')}
                  </MediumText>
                </td>
                <td>
                  <MediumText>{finishLevel}</MediumText>
                </td>
                <td>
                  <OrderItemButtonGroup
                    tableRowList={subjectList}
                    index={index}
                    onListChange={handleListChange}
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
  margin-top: 1rem;
  width: 100%;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.mono.black};

  th,
  td {
    position: relative;
    text-align: center;
    padding: 0.6rem 1rem;
    vertical-align: middle;
    border-bottom: solid 1px ${({ theme }) => theme.colors.mono.gray200};
  }

  th {
    max-width: 300px;
    padding: 0.8rem 1rem;
  }

  td:first-of-type {
    width: 15rem;
  }

  td:nth-of-type(2),
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5),
  td:nth-of-type(6),
  td:last-of-type {
    width: 8rem;
    max-width: 8rem;
  }
`;

const InputLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0.2rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;
