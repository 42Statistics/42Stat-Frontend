import { UserTeam } from '@/__generated__/graphql';
import { PrimaryText, Text } from '@components/common';
import styled from '@emotion/styled';
import { isDefined } from '@utils/isDefined';
import { rgba } from 'emotion-rgba';
import { DateDiffWithStatus } from './DateDiffWithStatus';
import { ResultWithStatus } from './ResultWithStatus';

type TeamInfoTableProps = {
  teams: (UserTeam | null)[];
};

export const TeamInfoTable = ({ teams }: TeamInfoTableProps) => {
  const heads = ['과제명', '시도', '팀명', '현재일로부터', '점수'];

  return (
    <Table>
      {heads.map((head, index) => (
        <th key={index}>
          <PrimaryText>{head}</PrimaryText>
        </th>
      ))}
      <tbody>
        {teams
          .filter(isDefined)
          .reverse()
          .map(
            ({
              id,
              name,
              occurrence,
              projectPreview,
              status,
              lastEventTime,
              isValidated,
              finalMark,
            }) => (
              <tr key={id}>
                <td>
                  <Text>{projectPreview.name}</Text>
                </td>
                <td>
                  <Text>{occurrence + 1}</Text>
                </td>
                <td>
                  <Text>{name}</Text>
                </td>
                <td>
                  <DateDiffWithStatus
                    date={new Date(lastEventTime)}
                    status={status}
                  />
                </td>
                <td>
                  <ResultWithStatus
                    isValidated={isValidated}
                    finalMark={finalMark}
                    status={status}
                  />
                </td>
              </tr>
            ),
          )}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  position: absolute;
  width: 100%;
  white-space: nowrap;

  th {
    text-align: center;
    padding: 0.8rem 2rem;
  }

  td {
    text-align: center;
    padding: 0.4rem 2rem;
  }

  tbody tr {
    border-radius: 1rem;
    transition: all 0.3s;
  }

  tbody tr:hover {
    background-color: ${({ theme }) => rgba(theme.colors.accent.default, 0.15)};
  }
`;
