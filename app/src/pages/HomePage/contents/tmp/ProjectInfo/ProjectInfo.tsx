import { gql } from '@/__generated__';
import { Center, HStack, Loader, Spacer, VStack } from '@/components/common';
import { PieChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { ProjectSearchBar } from '@/pages/HomePage/contents/ProjectInfo/ProjectSearchBar';
import { useLazyQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useEffect } from 'react';
import { ProjectInfoTable } from './ProjectInfoTable';
import { ProjectInfoTitle } from './ProjectInfoTitle';

const GET_PROJECT_INFO = gql(/* GraphQL */ `
  query GetProjectInfo($projectName: String!) {
    getTotalPage {
      projectInfo(projectName: $projectName) {
        id
        name
        skills
        averageDurationTime
        averagePassFinalmark
        totalCloseCnt
        currRegisteredCnt
        passPercentage
        totalEvalCnt
      }
    }
  }
`);

// TODO: 서클과 과제설명을 프론트에서 처리해주는거 만들어야됨
export const ProjectInfo = () => {
  const [search, { loading, error, data }] = useLazyQuery(GET_PROJECT_INFO);

  const handleSubmit = (projectName: string) => {
    search({
      variables: { projectName },
    });
  };

  useEffect(() => {
    search({
      variables: { projectName: 'libft' },
    });
  }, []);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const {
    name,
    skills,
    averagePassFinalmark,
    averageDurationTime,
    totalCloseCnt,
    currRegisteredCnt,
    passPercentage,
  } = data.getTotalPage.projectInfo;

  return (
    <>
      <VStack h="100%">
        <HStack w="100%">
          <ProjectSearchBar onSubmit={handleSubmit} />
          <Spacer />
        </HStack>
        <Center h="100%">
          <HStack w="100%" spacing="4rem" wrap="wrap">
            <ProjectInfoTitle name={name} />
            <ProjectInfoTable
              skills={skills}
              averagePassFinalmark={averagePassFinalmark}
              averageDurationTime={averageDurationTime}
              totalCloseCnt={totalCloseCnt}
              currRegisteredCnt={currRegisteredCnt}
            />
            <div style={{ width: '25rem', height: '25rem' }}>
              <PassPercentageChart
                labels={['Pass', 'Fail']}
                series={[passPercentage, 100 - passPercentage]}
              />
            </div>
          </HStack>
        </Center>
      </VStack>
    </>
  );
};

type PassPercentageChartProps = {
  labels: string[];
  series: number[];
};

const PassPercentageChart = ({ labels, series }: PassPercentageChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.semantic.pass, theme.colors.semantic.fail],
    tooltip: {
      y: {
        formatter: (value) => `${value.toFixed(1)}%`,
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
