import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';

import { Body1MediumText, HStack, Loader, VStack } from '@shared/ui-kit';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { BarChart } from '@shared/components/Chart';
import { kiloFormatter } from '@shared/utils/formatters/kiloFormatter';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

import { GET_SCORE_RECORDS_PER_COALITION } from '@/Home/dashboard-contents-queries/GET_SCORE_RECORDS_PER_COALITION';

export const MonthlyCoalitionCard = () => {
  const last = 1;
  const { loading, error, data } = useQuery(GET_SCORE_RECORDS_PER_COALITION, {
    variables: {
      last,
    },
  });

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <ApolloErrorView />
      </Layout>
    );
  }
  if (!data) {
    return (
      <Layout>
        <ApolloNotFoundView />
      </Layout>
    );
  }

  const { scoreRecordsPerCoalition } = data.getHomeCoalition;

  const categories: string[] = [];
  const seriesData: number[] = [];
  const colors: string[] = [];
  scoreRecordsPerCoalition.forEach(({ coalition, records }) => {
    categories.push(coalition.name);
    seriesData.push(records[0].value);
    colors.push(coalition.color ?? 'black');
  });

  const series: ApexAxisChartSeries = [
    {
      name: '',
      data: seriesData,
    },
  ];

  return (
    <Layout>
      <HStack w="100%" justify="start">
        <Body1MediumText>월간 코알리숑 순위</Body1MediumText>
      </HStack>
      <TotalScoresPerCoalitionChart
        categories={categories}
        series={series}
        colors={colors}
      />
    </Layout>
  );
};

const Layout = styled(VStack)`
  border-sizing: border-box;
  height: 30rem;
  width: 100%;
  padding: 4rem 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.md};
`;

type TotalScoresPerCoalitionChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
  colors: string[];
};

const TotalScoresPerCoalitionChart = ({
  categories,
  series,
  colors,
}: TotalScoresPerCoalitionChartProps) => {
  const data = series[0].data as number[];
  const [min, max] = [Math.min(...data), Math.max(...data)];

  const options: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
      },
    },
    legend: {
      show: false,
    },
    colors: colors,
    xaxis: {
      categories,
    },
    yaxis: {
      min: Math.floor(min - (max * 1.2 - min)),
      max: Math.ceil(max * 1.2),
      tickAmount: 4,
      labels: {
        formatter: (value) => kiloFormatter(value, 2),
      },
    },
    dataLabels: {
      formatter: (value) => kiloFormatter(value as number, 2), // FIXME: Type Assertion
    },
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, 'P'),
      },
      marker: {
        show: false,
      },
    },
  };

  return <BarChart options={options} series={series} />;
};
