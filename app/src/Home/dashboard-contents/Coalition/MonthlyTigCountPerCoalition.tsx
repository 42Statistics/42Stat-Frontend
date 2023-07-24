import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { CoalitionMark } from '@shared/components/CoalitionMark';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { TextMax } from '@shared/components/TextMax';
import { Center, H3Text, VStack } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters';
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
  const theme = useTheme();
  const title = '월간 누적 코알리숑 티그 횟수';
  const { loading, error, data } = useQuery(
    GET_TIG_COUNT_PER_COALITION_BY_DATE_TEMPLATE,
    {
      variables: { dateTemplate: DateTemplate.CurrMonth },
    },
  );

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const {
    data: tableRawData,
    start,
    end,
  } = data.getHomeCoalition.tigCountPerCoalitionByDateTemplate;

  const tableData = tableRawData.map(({ coalition, value }) => ({
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
      <Center>
        <VStack h="100%">
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
                    <TextMax
                      isMax={value !== 0 && max === value}
                      fontSize={theme.fonts.size.h3}
                    >
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
    padding: 0.6rem 2rem;
    vertical-align: middle;
  }
`;
