import { gql } from '@/__generated__';
import { HStack, Loader, PrimaryText, Text } from '@/components/common';
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
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { rgba } from 'emotion-rgba';

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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { teams } = data.getPersonGeneralPage.teamInfo;

  return (
    <div
      css={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <TeamInfoTable>
        <thead>
          <tr>
            <th>
              <PrimaryText>과제명</PrimaryText>
            </th>
            <th>
              <PrimaryText>시도</PrimaryText>
            </th>
            <th>
              <PrimaryText>제출</PrimaryText>
            </th>
            <th>
              <PrimaryText>등록일</PrimaryText>
            </th>
            <th>
              <PrimaryText>제출일</PrimaryText>
            </th>
            <th>
              <PrimaryText>소요 기간</PrimaryText>
            </th>
            <th>
              <PrimaryText>점수</PrimaryText>
            </th>
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
                    <td>
                      <Text>{name}</Text>
                    </td>
                    <td>
                      <Text>{occurrence}번째</Text>
                    </td>
                    <td>
                      <Text>
                        {closedAt != null
                          ? `${getDayDiff(new Date(), new Date(closedAt))}일 전`
                          : '-'}
                      </Text>
                    </td>
                    <td>
                      <Text>{dateFormatter(firstCreatedAt, 'lg')}</Text>
                    </td>
                    <td>
                      <Text>
                        {closedAt != null ? dateFormatter(closedAt, 'lg') : '-'}
                      </Text>
                    </td>
                    <td>
                      <Text>
                        {closedAt != null
                          ? `${getDayDiff(
                              new Date(closedAt),
                              new Date(firstCreatedAt),
                            )}일`
                          : '-'}
                      </Text>
                    </td>
                    <td>
                      <HStack
                        style={{
                          color: isValidated
                            ? theme.colors.semantic.pass
                            : theme.colors.semantic.fail,
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
    </div>
  );
};

const TeamInfoTable = styled.table`
  position: absolute;
  width: 100%;
  white-space: nowrap;

  th,
  td {
    text-align: center;
    padding: 0.8rem 2rem;
  }

  tbody tr {
    border-radius: 1rem;
    transition: all 0.3s;
  }

  tbody tr:hover {
    background-color: ${({ theme }) => rgba(theme.colors.accent.default, 0.15)};
  }
`;
