import { PrimaryMediumText, Writable, Button } from '@shared/ui-kit';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import SubjectListAtom from '@/Calculator/atoms/SubjectListAtom';

const CalculatorInput = () => {
  const [subjectList, setSubjectList] = useAtom(SubjectListAtom);

  const heads = ['프로젝트명', '경험치', '점수'];

  const onClick = () => {
    setSubjectList((prev) => [
      ...prev,
      { id: subjectList.length, name: '', blackhole: 0, level: 0 },
    ]);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
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
          {subjectList.map(({ id, name, blackhole, level }) => (
            <tr key={id}>
              <td>
                <Writable
                  id={id.toString()}
                  name="name"
                  onChange={onInputChange}
                  value={name}
                />
              </td>
              <td>
                <Writable
                  id={id.toString()}
                  name="blackhole"
                  onChange={onInputChange}
                  value={blackhole}
                />
              </td>
              <td>
                <Writable
                  id={id.toString()}
                  name="level"
                  onChange={onInputChange}
                  value={level}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={onClick}>추가</Button>
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
