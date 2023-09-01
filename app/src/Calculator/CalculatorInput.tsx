import { PrimaryMediumText, Text, GraphTextInput, GraphNumberInput } from '@shared/ui-kit';
import styled from '@emotion/styled';

const CalculatorInput = () => {
const heads = ['프로젝트명', '경험치', '점수', '코알리숑 보너스', '블랙홀 증가 일수', '통과시 레벨'];
const teams = [
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},
	{
		id: 1,
		name: "팀1",
		occurrence: 1,
		lastEventTime: "2021-10-01",
		isValidated: false,
		finalMark: 0,
	},

];

  return (
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
        {teams.map(
          ({
            id,
            name,
            occurrence,
          }) => (
            <tr key={id}>
              <td>
                <GraphTextInput w="10rem"></GraphTextInput>
              </td>
              <td>
                <Text>{occurrence + 1}</Text>
              </td>
              <td>
                <GraphNumberInput w="7rem" type="number"></GraphNumberInput>
              </td>
              <td>
                <Text>
									time
                </Text>
              </td>
              <td>
								<Text>hello</Text>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </Table>
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
