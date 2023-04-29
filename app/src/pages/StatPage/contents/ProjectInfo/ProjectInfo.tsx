import { gql } from '@/__generated__';
import { Divider, HStack, Spacer, Spinner, VStack } from '@/components/common';
import { PieChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { ProjectSearchBar } from '@/pages/StatPage/contents/ProjectInfo/ProjectSearchBar';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
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

  if (loading) return <Spinner />;
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
      <Desktop>
        <VStack h="100%">
          <HStack w="100%">
            <ProjectSearchBar onSubmit={handleSubmit} />
            <Spacer />
          </HStack>
          <HStack w="100%" h="100%" spacing="2rem">
            <ProjectInfoTitle name={name} />
            <Divider orientation="vertical" />
            <ProjectInfoTable
              skills={skills}
              averagePassFinalmark={averagePassFinalmark}
              averageDurationTime={averageDurationTime}
              totalCloseCnt={totalCloseCnt}
              currRegisteredCnt={currRegisteredCnt}
            />
            <Divider orientation="vertical" />

            <div style={{ width: '30rem', height: '30rem' }}>
              <PassPercentageChart
                labels={['Pass', 'Fail']}
                series={[passPercentage, 100 - passPercentage]}
              />
            </div>
          </HStack>
        </VStack>
      </Desktop>
      <Tablet>
        <VStack h="100%">
          <HStack w="100%">
            <ProjectSearchBar onSubmit={handleSubmit} />
            <Spacer />
          </HStack>
          <VStack w="100%" h="100%" spacing="5rem">
            <HStack w="100%" spacing="5rem">
              <ProjectInfoTitle name={name} />
              <ProjectInfoTable
                skills={skills}
                averagePassFinalmark={averagePassFinalmark}
                averageDurationTime={averageDurationTime}
                totalCloseCnt={totalCloseCnt}
                currRegisteredCnt={currRegisteredCnt}
              />
            </HStack>
            <div style={{ width: '300px', height: '300px' }}>
              <PassPercentageChart
                labels={['Pass', 'Fail']}
                series={[passPercentage, 100 - passPercentage]}
              />
            </div>
          </VStack>
        </VStack>
      </Tablet>
      <Mobile>
        <VStack h="100%">
          <HStack w="100%">
            <ProjectSearchBar onSubmit={handleSubmit} />
            <Spacer />
          </HStack>
          <VStack w="100%" h="100%" spacing="5rem">
            <ProjectInfoTitle name={name} />
            <Divider />
            <ProjectInfoTable
              skills={skills}
              averagePassFinalmark={averagePassFinalmark}
              averageDurationTime={averageDurationTime}
              totalCloseCnt={totalCloseCnt}
              currRegisteredCnt={currRegisteredCnt}
            />
            <Divider />
            <div style={{ width: '300px', height: '300px' }}>
              <PassPercentageChart
                labels={['Pass', 'Fail']}
                series={[passPercentage, 100 - passPercentage]}
              />
            </div>
          </VStack>
        </VStack>
      </Mobile>
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
    colors: [theme.colors.primary.default, theme.colors.secondary.default],
    tooltip: {
      y: {
        formatter: (value) => `${value.toFixed(1)}%`,
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
