import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

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
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { teams } = data.getPersonGeneralPage.teamInfo;
  // const Datas1: number[] = [];
  // const Datas2: number[] = [];
  // const labels: string[] = [];

  //임시 데이터임
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>과제명</th>
          <th>시도</th>
          <th>현재일로부터</th>
          <th>등록일</th>
          <th>제출일</th>
          <th>소요기간</th>
          <th>점수</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(
          ({
            id,
            name,
            occurrence,
            closedAt,
            firstCreatedAt,
            finalMark,
            isValidated,
          }: any) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{occurrence}</td>
                <td></td>
                <td>{firstCreatedAt[0]}</td>
                <td>{closedAt[0]}</td>
                <td>{isValidated}</td>
                <td>{finalMark}</td>
              </tr>
            );
          },
        )}
      </tbody>
    </StyledTable>
  );
};

export const StyledTable = styled.table`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.h3};
  border-collapse: collapse;

  th,
  td {
    padding: 0.8rem 2rem;
    white-space: nowrap;
  }

  tbody {
    display: block;
    overflow-y: scroll;
    height: 37rem;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  tbody tr {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  th {
    color: ${({ theme }) => theme.colors.primary.default};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    position: relative;
    top: 0;
  }
`;
