import { PrimaryMediumText, Writable, Button, CheckBox } from '@shared/ui-kit';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { SubjectListAtom } from '@/Calculator/atoms/SubjectListAtom';
import { ProjectSpotlight } from '@/Calculator/ProjectSpotlight';

const CalculatorInput = () => {
  const [subjectList, setSubjectList] = useAtom(SubjectListAtom);

  const heads = [
    '프로젝트명',
    '경험치',
    '점수',
    '코알리숑 보너스',
    '블랙홀 증가 일수',
    '통과시 레벨',
  ];

  const onAddClick = () => {
    setSubjectList((prev) => [
      ...prev,
      {
        id: subjectList.length,
        name: '',
        exp: 10042,
        score: 100,
        blackhole: 42,
        bonus: false,
        level: 6.72,
      },
    ]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const name = e.target.name as keyof typeof subjectList;
    const id = parseInt(e.target.id);
    const updatedSubjectList = subjectList.map((subject) => {
      if (subject.id === id) {
        return {
          ...subject,
          [name]: parseInt(value),
        };
      }
      return subject;
    });
    setSubjectList(updatedSubjectList);
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
    setSubjectList(updatedSubjectList);
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
            ({ id, name, exp, score, bonus, blackhole, level }) => (
              <tr key={id}>
                <td>
                  <ProjectSpotlight index={id} keyword={name} />
                </td>
                <td>{exp}</td>
                <td>
                  <Writable
                    type="number"
                    id={id.toString()}
                    name="score"
                    onChange={handleInputChange}
                    value={score}
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
                <td>{level}</td>
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
