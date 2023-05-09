import { BarChart } from '@/components/elements/Chart';
import { numberWithUnitFormatter } from '@/utils/formatters';

// const GET_USER_CNT_PER_POINTS = gql(/* GraphQL */ `
//   query getUserCntPerPoints {
//     getTotalPage {
//       userCntPerPoints {
//         userCnt
//         point
//       }
//     }
//   }
// `);

export const UserCntPerPoints = () => {
  return <></>;
  // const { loading, error, data } = useQuery(GET_USER_CNT_PER_POINTS);

  // if (loading) return <Loader />;
  // if (error) {
  //   return <h1>{error.message}</h1>;
  // }
  // if (!data) {
  //   return <h1>user not found</h1>;
  // }
  // const { userCntPerPoints } = data.getTotalPage;
  // const categories = userCntPerPoints.map(({ point }) => point);
  // const seriesData = userCntPerPoints.map(({ userCnt }) => userCnt);
  // const series: ApexAxisChartSeries = [
  //   {
  //     name: '인원수',
  //     data: seriesData,
  //   },
  // ];

  // return <UserCntPerPointsChart categories={categories} series={series} />;
};

type UserCntPerPointsChartProps = {
  categories: number[];
  series: ApexAxisChartSeries;
};

const UserCntPerPointsChart = ({
  categories,
  series,
}: UserCntPerPointsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories,
      labels: {
        formatter: (value) => numberWithUnitFormatter(parseInt(value), '개'),
      },
    },
    yaxis: {
      max: 500,
      labels: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
  };

  return <BarChart options={options} series={series} />;
};
