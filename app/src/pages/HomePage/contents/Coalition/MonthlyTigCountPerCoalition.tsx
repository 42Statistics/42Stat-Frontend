import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { Center, H3Text, Loader, Text, VStack } from '@components/common';
import { CoalitionMark } from '@components/elements/CoalitionMark';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import styled from '@emotion/styled';
import { numberWithUnitFormatter } from '@utils/formatters';
import dayjs from 'dayjs';
import { capitalize } from 'lodash-es';

const GET_TIG_COUNT_PER_COALITION_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetTigCountPerCoalitionByDateTemplate($dateTemplate: DateTemplate!) {
    getHomeCoalition {
      tigCountPerCoalitionByDateTemplate(dateTemplate: $dateTemplate) {
        data {
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
        start
        end
      }
    }
  }
`);

export const MonthlyTigCountPerCoalition = () => {
  const title = '월간 누적 코알리숑 티그 횟수';
  const {
    loading,
    error,
    data: queryData,
  } = useQuery(GET_TIG_COUNT_PER_COALITION_BY_DATE_TEMPLATE, {
    variables: { dateTemplate: DateTemplate.CurrMonth },
  });
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
  if (!queryData)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { data, start, end } =
    queryData.getHomeCoalition.tigCountPerCoalitionByDateTemplate;

  const tableData = data.map(({ coalition, value }) => ({
    coalition,
    value,
  }));

  const max = Math.max(...tableData.map(({ value }) => value));

  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <Center w="100%" h="100%">
        <VStack w="80%" h="100%">
          <MonthlyTigCountPerCoalitionTable>
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
          </MonthlyTigCountPerCoalitionTable>
        </VStack>
      </Center>
    </DashboardContent>
  );
};

const MonthlyTigCountPerCoalitionTable = styled.table`
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
