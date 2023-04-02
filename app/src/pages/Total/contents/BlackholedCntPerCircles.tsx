import { Spinner } from '@/components/common';
import { BarChart } from '@/components/elements/charts/presets/BarChart';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_WHEN_GO_BLACKHOLE = gql(/* GraphQL */ `
  query getWhenGoBlackHole {
    getTotalPage {
      blackholedCntPerCircles {
        circle
        value
      }
    }
  }
`);

export const BlackholedCntPerCircles = () => {
  const { loading, error, data } = useQuery(GET_WHEN_GO_BLACKHOLE);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { blackholedCntPerCircles } = data.getTotalPage;
  const showDatas: string[] = [];
  const barDatas: number[] = [];
  const labels: string[] = [];

  let totalNum = 0;
  blackholedCntPerCircles.forEach(({ circle, value }, idx) => {
    labels.push(circle.toString() + '서클');
    showDatas.push(value.toString());
    totalNum += value;
  });
  blackholedCntPerCircles.forEach(({ value }) => {
    barDatas.push(Math.round((value / totalNum) * 1000) / 10);
  });

  return (
    <BarChart
      data={barDatas}
      yUnit="%"
      showData={showDatas}
      labels={labels}
      size="lg"
      seriesName="블랙홀 간 인원"
    />
  );
};
