import { gql } from '@/__generated__';
import { HStack, Scroll, Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { dateFormatter } from '@/utils/formatters';
import { getDayDiff } from '@/utils/getDayDiff';
import { isDefined } from '@/utils/isDefined';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const GET_TEAM_INFO = gql(/* GraphQL */ `
  query getTeamInfo {
    getPersonGeneralPage {
      teamInfo {
        teams {
          id
          name
          occurrence
          closedAt
          firstCreatedAt
          finalMark
          isValidated
        }
      }
    }
  }
`);

export const TeamInfo = () => {
  const { loading, error, data } = useQuery(GET_TEAM_INFO);
  const theme = useTheme();

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { teams } = data.getPersonGeneralPage.teamInfo;

  return (
    <Scroll>
      <TeamInfoTable>
        <thead>
          <tr>
            <th>과제명</th>
            <th>시도</th>
            <th>제출</th>
            <th>등록일</th>
            <th>제출일</th>
            <th>소요 기간</th>
            <th>점수</th>
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
                closedAt,
                firstCreatedAt,
                finalMark,
                isValidated,
              }) => {
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{occurrence}번째</td>
                    <td>
                      {closedAt != null
                        ? `${getDayDiff(new Date(), new Date(closedAt))}일 전`
                        : '-'}
                    </td>
                    <td>{dateFormatter(firstCreatedAt, 'lg')}</td>
                    <td>
                      {closedAt != null ? dateFormatter(closedAt, 'lg') : '-'}
                    </td>
                    <td>
                      {closedAt != null
                        ? `${getDayDiff(
                            new Date(closedAt),
                            new Date(firstCreatedAt),
                          )}일`
                        : '-'}
                    </td>
                    <td>
                      <HStack
                        style={{
                          color: isValidated
                            ? theme.colors.primary.default
                            : theme.colors.secondary.default,
                        }}
                      >
                        {isValidated ? <AiOutlineCheck /> : <AiOutlineClose />}
                        {finalMark == null ? 0 : finalMark}
                      </HStack>
                    </td>
                  </tr>
                );
              },
            )}
        </tbody>
      </TeamInfoTable>
    </Scroll>
  );
};

const TeamInfoTable = styled.table`
  display: block;
  width: 100%;
  max-height: 40rem;

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-radius: 2rem;
  }

  th,
  td {
    text-align: center;
    padding: 0.8rem 2rem;
    white-space: nowrap;
  }

  th {
    color: ${({ theme }) => theme.colors.primary.default};
  }

  tbody tr {
    transition: all 0.2s;
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`;
