import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { AreaChart } from '@/components/elements/Chart';
import { getDateTime } from '@/utils/getDateTime';
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
  const showData: string[] = [];
  const barData: number[] = [];
  const labels: string[] = [];

  activeUserCntRecords.forEach(({ at, value }) => {
    const { year, month } = getDateTime(new Date(at));

    labels.push(
      `'${String(Math.floor(year % 100)).padStart(2, '0')}.
      ${String(month).padStart(2, '0')}`,
    );
    barData.push(value);
    showData.push(value.toString());
  });

  return (
    <AreaChart
      data={barData}
      yUnit=""
      showData={showData}
      labels={labels}
      seriesName="활성화 유저"
    />
  );
};
