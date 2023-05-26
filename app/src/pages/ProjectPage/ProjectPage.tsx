import { gql } from '@/__generated__';
import {
  AccentText,
  BoldText,
  Divider,
  H3BoldText,
  H3Text,
  HStack,
  Loader,
  Text,
  VStack,
} from '@/components/common';
import { PieChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { AboveTabletFooter } from '@/components/elements/Footer/AboveTabletFooter';
import { MobileFooter } from '@/components/elements/Footer/MobileFooter';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { HiUsers } from '@react-icons/all-files/hi/HiUsers';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

const GET_PROJECT_INFO = gql(/* GraphQL */ `
  query GetProjectInfo($projectName: String!) {
    getTotalPage {
      projectInfo(projectName: $projectName) {
        id
        name
        skills
        averageDurationTime
        averagePassFinalmark
        totalCloseCount
        currRegisteredCount
        passPercentage
        totalEvalCount
      }
    }
  }
`);

export const ProjectPage = () => {
  const { projectName } = useParams() as { projectName: string }; // FIXME: Type Assertion 제거
  const { loading, error, data } = useQuery(GET_PROJECT_INFO, {
    variables: { projectName },
  });

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const {
    name,
    skills,
    averagePassFinalmark,
    totalCloseCount,
    currRegisteredCount,
    passPercentage,
  } = data.getTotalPage.projectInfo;

  return (
    <>
      <Helmet>
        <title>{name} | 42Stat</title>
      </Helmet>
      <ProjectPageLayout>
        <VStack w="100%" spacing="8rem">
          <HStack spacing="10rem" wrap="wrap" align="end">
            <VStack align="start" spacing="2rem">
              <VStack align="start">
                <Text>0서클</Text>
                <BoldText fontSize="4rem">{name}</BoldText>
              </VStack>
              <VStack align="start" spacing="1rem">
                <Text selectable>나만의 라이브러리 만들기</Text>
                <AccentText>서브젝트 보기</AccentText>
              </VStack>
              <HStack spacing="2rem">
                <HiUsers size="16px" />
                <Text selectable>
                  {numberWithUnitFormatter(currRegisteredCount, '팀')} 진행 중
                </Text>
              </HStack>
            </VStack>
            <ProjectTable>
              <tbody>
                <tr>
                  <td>
                    <Text>인원</Text>
                  </td>
                  <td>
                    <Text>1인</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>기간</Text>
                  </td>
                  <td>
                    <Text>70시간</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>경험치</Text>
                  </td>
                  <td>
                    <Text>462 XP</Text>
                  </td>
                </tr>
              </tbody>
            </ProjectTable>
          </HStack>
          <Divider />
          <HStack spacing="10rem" wrap="wrap">
            <VStack align="start" spacing="1rem">
              <HStack>
                <H3BoldText selectable>
                  지금까지 {numberWithUnitFormatter(totalCloseCount, '팀')}
                </H3BoldText>
                <H3Text selectable>이 제출했어요</H3Text>
              </HStack>
              <HStack>
                <H3BoldText selectable>
                  평균 {numberWithUnitFormatter(averagePassFinalmark, '점')}
                </H3BoldText>
                <H3Text selectable>으로 통과합니다</H3Text>
              </HStack>
              <Link to={`/evallog?projectName=${name}`}>
                <AccentText>지난 평가 보기</AccentText>
              </Link>
            </VStack>
            <div style={{ width: '26rem', height: '26rem' }}>
              <ProjectResultPercentageChart
                labels={['101점 ~', '80 ~ 100점', '0 ~ 79점']}
                series={[1280, 310, 551]}
              />
            </div>
          </HStack>
        </VStack>
      </ProjectPageLayout>
      <AboveTablet>
        <AboveTabletFooter />
      </AboveTablet>
      <Mobile>
        <MobileFooter />
      </Mobile>
    </>
  );
};

const ProjectPageLayout = styled.div`
  width: 100%;
  padding: 10rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-radius: 2rem;
`;

const ProjectTable = styled.table`
  text-align: center;
  white-space: nowrap;

  th,
  td {
    padding: 0.8rem 2rem;
  }

  & td:first-of-type {
    color: ${({ theme }) => theme.colors.primary.default};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }
`;

type ProjectResultPercentageChartProps = {
  labels: string[];
  series: number[];
};

const ProjectResultPercentageChart = ({
  labels,
  series,
}: ProjectResultPercentageChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [
      theme.colors.semantic.pass,
      theme.colors.semantic.warning,
      theme.colors.semantic.fail,
    ],
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '팀'),
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
