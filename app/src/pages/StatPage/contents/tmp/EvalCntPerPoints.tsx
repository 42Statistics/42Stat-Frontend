import { BarChart } from '@/components/elements/Chart';
import { numberWithUnitFormatter } from '@/utils/formatters';

// const GET_EVAL_CNT_PER_POINTS = gql(/* GraphQL */ `
//   query getEvalCntPerPoints {
//     getTotalPage {
//       evalCntPerPoints {
//         evalCnt
//         point
//       }
//     }
//   }
// `);

export const EvalCntPerPoints = () => {
  return <></>;
  // const { loading, error, data } = useQuery(GET_EVAL_CNT_PER_POINTS);

  // if (loading) return <></>;
  // if (error) {
  //   return <h1>{error.message}</h1>;
  // }
  // if (!data) {
  //   return <h1>user not found</h1>;
  // }

  // const { evalCntPerPoints } = data.getTotalPage;
  // const categories = evalCntPerPoints.map(({ point }) => point);
  // const seriesData = evalCntPerPoints.map(({ evalCnt }) => evalCnt);
  // const series: ApexAxisChartSeries = [
  //   {
  //     name: '평가 횟수',
  //     data: seriesData,
  //   },
  // ];

  // return <EvalCntPerPointsChart categories={categories} series={series} />;
};

type EvalCntPerPointsChartProps = {
  categories: number[];
  series: ApexAxisChartSeries;
};

const EvalCntPerPointsChart = ({
  categories,
  series,
}: EvalCntPerPointsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories,
      labels: {
        formatter: (value) => numberWithUnitFormatter(parseInt(value), '개'),
      },
    },
    yaxis: {
      max: 80,
      labels: {
        formatter: (value) => numberWithUnitFormatter(value, '회'),
      },
    },
  };
  return <BarChart series={series} options={options} />;
};
