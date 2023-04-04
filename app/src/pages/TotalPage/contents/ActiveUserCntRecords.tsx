import { Spinner } from '@/components/common';
import { AreaChart } from '@/components/elements/charts/presets/AreaChart';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_ACTIVE_USER_CNT_RECORD = gql(/* GraphQL */ `
  query getActiveUserCntRecord {
    getTotalPage {
      activeUserCntRecords {
        at
        value
      }
    }
  }
`);

export const ActiveUserCntRecords = () => {
  const { loading, error, data } = useQuery(GET_ACTIVE_USER_CNT_RECORD);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { activeUserCntRecords } = data.getTotalPage;
  const showDatas: string[] = [];
  const barDatas: number[] = [];
  const labels: string[] = [];

  activeUserCntRecords.forEach(({ at, value }, idx) => {
    labels.push(at.substr(2, 5).replace('-', '.'));
    showDatas.push(value.toString());
    barDatas.push(value);
  });

  return (
    <AreaChart
      data={barDatas}
      yUnit=""
      showData={showDatas}
      labels={labels}
      size="lg"
      seriesName="active 유저"
    />
  );
};
