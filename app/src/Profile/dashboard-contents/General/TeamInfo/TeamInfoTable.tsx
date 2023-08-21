import styled from '@emotion/styled';
import { UserTeam } from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/ROUTES';
import { PrimaryMediumText, Text } from '@shared/ui-kit';
import { getDateDiffStringWithTeamStatus } from '@shared/utils/getDateDiffStringWithTeamStatus';
import { rgba } from 'emotion-rgba';
import { useNavigate } from 'react-router-dom';
import { ResultWithStatus } from './ResultWithStatus';

type TeamInfoTableProps = {
  teams: UserTeam[];
};

export const TeamInfoTable = ({ teams }: TeamInfoTableProps) => {
  const navigate = useNavigate();
  const heads = ['과제명', '시도', '팀명', '현재일로부터', '점수'];

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
            projectPreview,
            status,
            lastEventTime,
            isValidated,
            finalMark,
          }) => (
            <tr key={id} onClick={() => navigate(ROUTES.TEAM_OF(id))}>
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
                <Text>
                  {getDateDiffStringWithTeamStatus(
                    new Date(lastEventTime),
                    status,
                  )}
                </Text>
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
    position: sticky;
    top: 0;
    text-align: center;
    padding: 0.8rem 2rem;
    vertical-align: middle;
    background-color: ${({ theme }) =>
      rgba(theme.colors.background.box.default, 0.9)};
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

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.element.hover};
  }

  tbody tr:active {
    background-color: ${({ theme }) => theme.colors.element.active};
  }
`;
