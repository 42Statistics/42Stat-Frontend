import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Center, H3Text, Loader, Text, VStack } from '@components/common';
import { CoalitionMark } from '@components/elements/CoalitionMark';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import styled from '@emotion/styled';
import { numberWithUnitFormatter } from '@utils/formatters';
import dayjs from 'dayjs';
import { capitalize } from 'lodash-es';

const GET_TIG_COUNT_PER_COALITION = gql(/* GraphQL */ `
  query GetTigCountPerCoalition {
    getHomeCoalition {
      tigCountPerCoalition {
        coalition {
          id
          name
          slug
          imageUrl
          coverUrl
          color
          score
          userId
        }
        value
      }
    }
  }
`);

export const TigCountPerCoalition = () => {
  const title = '이번 달 누적 코알리숑 티그 횟수';
  const { loading, error, data } = useQuery(GET_TIG_COUNT_PER_COALITION);
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { tigCountPerCoalition } = data.getHomeCoalition;

  const tableData = tigCountPerCoalition.map(({ coalition, value }) => ({
    coalition,
    value,
  }));

  const max = Math.max(...tableData.map(({ value }) => value));

  const description = `${dayjs().format('YYYY년 M월')}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <Center w="100%" h="100%">
        <VStack w="80%" h="100%">
          <TigCountPerCoalitionTable>
            <tbody>
              {tableData.map(({ coalition, value }) => (
                <tr key={coalition.name}>
                  <td>
                    <CoalitionMark coalition={coalition} />
                  </td>
                  <td>
                    <H3Text>{capitalize(coalition.name)}</H3Text>
                  </td>
                  <td>
                    <TextMax isMax={max === value}>
                      {numberWithUnitFormatter(value, unit)}
                    </TextMax>
                  </td>
                </tr>
              ))}
            </tbody>
          </TigCountPerCoalitionTable>
        </VStack>
      </Center>
    </DashboardContent>
  );
};

const TigCountPerCoalitionTable = styled.table`
  width: 100%;
  text-align: center;

  td {
    padding: 0.6rem;
    vertical-align: middle;
  }
`;

const TextMax = styled(Text)<{ isMax: boolean }>`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  color: ${({ theme, isMax }) =>
    isMax ? theme.colors.accent.default : theme.colors.mono.black};
`;
