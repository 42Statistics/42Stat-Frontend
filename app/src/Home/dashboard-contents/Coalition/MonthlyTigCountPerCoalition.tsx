import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { capitalize } from 'lodash-es';

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
import { Body1Text, Center, VStack } from '@shared/ui-kit';
import { CoalitionTable } from '@shared/ui-kit-styled/CoalitionTable';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { getStartEndDateString } from '@shared/utils/getStartEndDateString';

const GET_TIG_COUNT_PER_COALITION_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetTigCountPerCoalitionByDateTemplate($dateTemplate: DateTemplate!) {
    getHomeCoalition {
      tigCountPerCoalitionByDateTemplate(dateTemplate: $dateTemplate) {
        data {
          coalition {
            ...coalitionFields
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
  const title = '월간 코알리숑 티그 횟수';
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

  const description = getStartEndDateString(
    new Date(start),
    new Date(end),
    'M월 D일',
  );
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <Center>
        <VStack h="100%">
          <CoalitionTable>
            <tbody>
              {tableData.map(({ coalition, value }) => (
                <tr key={coalition.name}>
                  <td>
                    <CoalitionMark coalition={coalition} />
                  </td>
                  <td>
                    <Body1Text>{capitalize(coalition.name)}</Body1Text>
                  </td>
                  <td>
                    <TextMax
                      isMax={value !== 0 && max === value}
                      fontSize={theme.fonts.size.body1}
                    >
                      {numberWithUnitFormatter(value, unit)}
                    </TextMax>
                  </td>
                </tr>
              ))}
            </tbody>
          </CoalitionTable>
        </VStack>
      </Center>
    </DashboardContent>
  );
};
