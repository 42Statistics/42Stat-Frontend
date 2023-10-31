import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { capitalize } from 'lodash-es';

import { gql } from '@shared/__generated__';
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

const GET_WIN_COUNT_PER_COALITION = gql(/* GraphQL */ `
  query GetWinCountPerCoalition {
    getHomeCoalition {
      winCountPerCoalition {
        coalition {
          ...coalitionFields
        }
        value
      }
    }
  }
`);

export const WinCountPerCoalition = () => {
  const theme = useTheme();
  const title = '코알리숑 우승 횟수';
  const { loading, error, data } = useQuery(GET_WIN_COUNT_PER_COALITION);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { winCountPerCoalition } = data.getHomeCoalition;

  const tableData = winCountPerCoalition.map(({ coalition, value }) => ({
    coalition,
    value,
  }));

  const max = Math.max(...tableData.map(({ value }) => value));

  const unit = '회';

  return (
    <DashboardContent title={title}>
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
