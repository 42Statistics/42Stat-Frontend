import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  AccentText,
  BoldText,
  Divider,
  H3Text,
  HStack,
  Text,
  VStack,
} from '@components/common';
import { Label } from '@components/common/Label';
import { PieChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { Seo } from '@components/elements/Seo';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { ProjectPageSkeleton } from '@pages/PageSkeletons/ProjectPageSkeleton';
import { HiUsers } from '@react-icons/all-files/hi/HiUSers';
import { numberWithUnitFormatter } from '@utils/formatters';
import { isDefined } from '@utils/isDefined';
import { titleCase } from '@utils/titleCase';
import { Link, useParams } from 'react-router-dom';

const GET_PROJECT_INFO = gql(/* GraphQL */ `
  query GetProjectInfo($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      id
      name
      skills
      keywords
      description
      minUserCount
      maxUserCount
      duration
      difficulty
      currRegisteredTeamCount
      closedTeamCount
      averagePassFinalMark
      evalInfo {
        totalEvalCount
        passCount
        failCount
      }
    }
  }
`);

const ProjectPage = () => {
  const theme = useTheme();
  const { projectName } = useParams() as { projectName: string }; // FIXME: Type Assertion 제거
  const { loading, error, data } = useQuery(GET_PROJECT_INFO, {
    variables: { projectName },
  });

  if (loading) return <ProjectPageSkeleton />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const {
    id,
    name,
    skills,
    keywords,
    description,
    minUserCount,
    maxUserCount,
    duration,
    difficulty,
    currRegisteredTeamCount,
    closedTeamCount,
    averagePassFinalMark,
    evalInfo,
  } = data.getProjectInfo;

  const passPercentage = (evalInfo.passCount / evalInfo.totalEvalCount) * 100;
  const getPeopleRange = (from: number, to: number) => {
    if (from === to) {
      if (from === 1) return 'Solo';
      return `${from} Students`;
    }
    return `${from} ~ ${to} Students`;
  };

  return (
    <ProjectPageLayout>
      <VStack w="100%" spacing="5rem">
        <VStack spacing="0.5rem">
          <Text>0서클</Text>
          <BoldText fontSize="4rem" style={{ fontStyle: 'italic' }}>
            {name.toUpperCase()}
          </BoldText>
        </VStack>
        <VStack spacing="1rem">
          <Text>{`${getPeopleRange(
            minUserCount,
            maxUserCount,
          )} / ${duration} hrs. / ${difficulty} XP`}</Text>
          <HStack spacing="1rem">
            <HiUsers size="16px" />
            <Text>
              {numberWithUnitFormatter(currRegisteredTeamCount, '팀')} 진행 중
            </Text>
          </HStack>
        </VStack>
        <VStack spacing="3rem">
          <HStack spacing="1rem" wrap="wrap">
            {keywords.filter(isDefined).map((text) => (
              <Label
                key={text}
                text={titleCase(text)}
                bgColor={theme.colors.accent.default}
                fontWeight={theme.fonts.weight.medium}
              />
            ))}
          </HStack>
          <HStack spacing="1rem" wrap="wrap">
            {skills.filter(isDefined).map((text) => (
              <Label
                key={text}
                text={titleCase(text)}
                fontWeight={theme.fonts.weight.medium}
              />
            ))}
          </HStack>
        </VStack>
        <div style={{ maxWidth: '400px' }}>
          <Text selectable style={{ textAlign: 'center' }}>
            {description}
          </Text>
        </div>
        <AccentText>Intra 프로젝트 링크</AccentText>
        <Divider />
        <VStack spacing="2rem">
          <HStack>
            <H3Text selectable>
              지금까지&nbsp;
              <strong>{numberWithUnitFormatter(closedTeamCount, '팀')}</strong>
              이 제출했어요
            </H3Text>
          </HStack>
          <HStack>
            <H3Text selectable>
              평균&nbsp;
              <strong>
                {numberWithUnitFormatter(averagePassFinalMark, '점')}
              </strong>
              으로 통과합니다
            </H3Text>
          </HStack>
        </VStack>
        <Link to={`/evallog?projectName=${name}`}>
          <AccentText>Past Evaluations</AccentText>
        </Link>
        <div style={{ width: '26rem', height: '26rem' }}>
          <ProjectResultPercentageChart
            labels={['Pass', 'Fail']}
            series={[passPercentage, 100 - passPercentage]}
          />
        </div>
      </VStack>
    </ProjectPageLayout>
  );
};

const ProjectPageLayout = styled.div`
  padding-top: 4rem;
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
    colors: [theme.colors.semantic.pass, theme.colors.semantic.fail],
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '팀'),
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};

const Head = () => {
  const { projectName } = useParams() as { projectName: string };

  return <Seo title={projectName} />;
};

export default withHead(withFooter(ProjectPage), Head);
