import {
  PrimaryMediumText,
  TableInput,
  Button,
  CheckBox,
} from '@shared/ui-kit';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { SubjectListAtom } from '@/Calculator/atoms/SubjectListAtom';
import { ProjectSpotlight } from '@/Calculator/ProjectSpotlight';
import { calculatorPropsAtom } from './atoms/CalculatorPropsAtom';
import { calculateSubjectList } from '@/Calculator/utils/calculateSubjectList';

const CalculatorInput = () => {
  const [subjectList, setSubjectList] = useAtom(SubjectListAtom);
  const [calculatorProps] = useAtom(calculatorPropsAtom);
  const currentLevel = calculatorProps.currentLevel;

  const heads = [
    '프로젝트명',
    '경험치',
    '점수',
    '코알리숑 보너스',
    '블랙홀 증가 일수',
    '통과시 레벨',
  ];

  const onAddClick = () => {
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
            ({ id, name, exp, score, bonus, blackhole, finishLevel }) => (
              <tr key={id}>
                <td>
                  <ProjectSpotlight index={id} keyword={name} />
                </td>
                <td>{exp}</td>
                <td>
                  <TableInput
                    type="number"
                    min="0"
                    max="300"
                    id={id.toString()}
                    name="score"
                    onChange={handleInputChange}
                    value={score}
                    style={{ width: '4rem' }}
                  />
                </td>
                <td>
                  <CheckBox
                    id={id.toString()}
                    type="checkbox"
                    name="bonus"
                    onChange={onCheckBoxChange}
                    checked={bonus}
                  />
                </td>
                <td>{blackhole}</td>
                <td>{finishLevel}</td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
      <Button onClick={onAddClick}>추가</Button>
    </>
  );
};

const Table = styled.table`
  width: 90%;
  white-space: nowrap;

  th {
    position: sticky;
    top: 0;
    text-align: center;
    padding: 0.8rem 2rem;
    vertical-align: middle;
    border-bottom: solid 1px ${({ theme }) => theme.colors.mono.gray300};
  }

  td {
    max-width: 300px;
    overflow-x: hidden;
    text-align: center;
    padding: 0.4rem 2rem;
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

export default CalculatorInput;
