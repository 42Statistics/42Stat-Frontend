import { gql } from '@/__generated__';
import { HStack, Loader, PrimaryText, Text } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
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
    <TeamInfoLayout>
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
                <PrimaryText>팀명</PrimaryText>
              </th>
              <th>
                <PrimaryText>현재일로부터</PrimaryText>
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
                        <Text>#{occurrence}</Text>
                      </td>
                      <td>
                        <Text>Example Team</Text>
                      </td>
                      <td>
                        <Text>
                          {closedAt != null
                            ? `${getDayDiff(
                                new Date(),
                                new Date(closedAt),
                              )}일 전`
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
                          {isValidated ? (
                            <AiOutlineCheck />
                          ) : (
                            <AiOutlineClose />
                          )}
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
    </TeamInfoLayout>
  );
};

const TeamInfoLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

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
