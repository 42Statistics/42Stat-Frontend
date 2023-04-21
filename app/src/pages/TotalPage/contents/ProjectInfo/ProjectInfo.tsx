import { gql } from '@/__generated__';
import { Divider, HStack, Spacer, Spinner, VStack } from '@/components/common';
import { PieChart } from '@/components/elements/Chart';
import { ProjectSearchBar } from '@/components/elements/SearchBar/ProjectSearchBar';
import { useSearchBar } from '@/components/elements/SearchBar/hooks/useSearchBar';
import { isEnterKeyReleased } from '@/utils/isEnterKeyReleased';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
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

// TODO: 실제 검색으로 변경
const searchProject = (input: string) => {
  console.log(input);
};

// TODO: 서클과 과제설명을 프론트에서 처리해주는거 만들어야됨
export const ProjectInfo = () => {
  const { input, handleChange } = useSearchBar(searchProject);
  const [projectName, setProjectName] = useState<string>('libft');
  const { loading, error, data } = useQuery(GET_PROJECT_INFO, {
    variables: { projectName },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isEnterKeyReleased(e)) {
      setProjectName(input);
    }
  };

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>project not found</h1>;
  }

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
        <HStack w="100%">
          <ProjectSearchBar onChange={handleChange} onKeyDown={handleKeyDown} />
          <Spacer />
        </HStack>
        <HStack w="100%" h="100%" spacing="5rem">
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
      </Desktop>
      <Tablet>
        <HStack w="100%">
          <ProjectSearchBar onChange={handleChange} onKeyDown={handleKeyDown} />
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
          <Divider />
          <div style={{ width: '300px', height: '300px' }}>
            <PassPercentageChart
              labels={['Pass', 'Fail']}
              series={[passPercentage, 100 - passPercentage]}
            />
          </div>
        </VStack>
      </Tablet>
      <Mobile>
        <HStack w="100%">
          <ProjectSearchBar onChange={handleChange} onKeyDown={handleKeyDown} />
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
    colors: [theme.colors.third.default, theme.colors.secondary.default],
    tooltip: {
      y: {
        formatter: (value) => `${value.toFixed(1)}%`,
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
