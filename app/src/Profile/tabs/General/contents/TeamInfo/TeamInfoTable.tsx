import { PrimaryText, Text } from '@components/common';
import styled from '@emotion/styled';
import { UserTeam } from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/ROUTES';
import { isDefined } from '@shared/utils/isDefined';
import { truncate } from 'lodash-es';
import { Link } from 'react-router-dom';
import { DateDiffWithStatus } from './DateDiffWithStatus';
import { ResultWithStatus } from './ResultWithStatus';

type TeamInfoTableProps = {
  teams: (UserTeam | null)[];
};

export const TeamInfoTable = ({ teams }: TeamInfoTableProps) => {
  const heads = ['과제명', '시도', '팀명', '현재일로부터', '점수'];

  return (
    <Table>
      <thead>
        <tr>
          {heads.map((head, index) => (
            <th key={index}>
              <PrimaryText>{head}</PrimaryText>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {teams
          .filter(isDefined)
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
                  <Link to={`${ROUTES.PROJECT_ROOT}/${projectPreview.name}`}>
                    <Text>{projectPreview.name}</Text>
                  </Link>
                </td>
                <td>
                  <Text>{occurrence + 1}</Text>
                </td>
                <td>
                  <Text>{truncate(name, { length: 42 })}</Text>
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

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.element.hover};
  }

  tbody tr:active {
    background-color: ${({ theme }) => theme.colors.element.active};
  }
`;
