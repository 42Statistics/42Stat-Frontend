import { gql } from '@/__generated__';
import { HStack, Spinner } from '@/components/common';
import { dateFormatter } from '@/utils/dateFormatter';
import { getDayDiff } from '@/utils/getDayDiff';
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
      <thead></thead>
      <tbody>
        <tr>
          <th>과제명</th>
          <th>시도</th>
          <th>현재일로부터</th>
          <th>등록일</th>
          <th>제출일</th>
          <th>소요기간</th>
          <th>점수</th>
        </tr>
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
                <td>{occurrence}번째</td>
                <td>{getDayDiff(new Date(), new Date(closedAt))}일 전 제출</td>
                <td>{dateFormatter(firstCreatedAt, 'lg')}</td>
                <td>{dateFormatter(closedAt, 'lg')}</td>
                <td>
                  {getDayDiff(new Date(closedAt), new Date(firstCreatedAt))}일
                </td>
                <td>
                  <HStack
                    style={{
                      color: isValidated
                        ? theme.colors.third.dark
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
    </StyledTable>
  );
};

const StyledTable = styled.table`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.h3};
  margin-left: auto;
  margin-right: auto;

  th,
  td {
    padding: 0.8rem 2rem;
    white-space: nowrap;
  }

  tbody {
    display: block;
    overflow: auto;
    height: 37rem;
    width: 100%;

    tr:first-child {
      position: sticky;
      top: 0;
      z-index: 1;
      color: ${({ theme }) => theme.colors.primary.default};
      font-weight: ${({ theme }) => theme.fonts.weight.medium};
      background-color: ${({ theme }) => theme.colors.mono.white};
    }

    tr:not(:first-child) {
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.light};
      }
    }
  }

  tbody tr {
    width: 100%;
    table-layout: fixed;
  }
`;
