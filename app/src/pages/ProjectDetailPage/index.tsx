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
} from '@components/elements/DashboardContentView/Error';
import { Seo } from '@components/elements/Seo';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { ProjectPageSkeleton } from '@pages/PageSkeletons/ProjectPageSkeleton';
import { BsPeopleFill } from '@react-icons/all-files/bs/BsPeopleFill';
import { numberWithUnitFormatter } from '@utils/formatters';
import { isDefined } from '@utils/isDefined';
import { titleCase } from '@utils/titleCase';
import { Link, useParams } from 'react-router-dom';

const GET_PROJECT_INFO = gql(/* GraphQL */ `
  query GetProjectInfo($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      id
      name
      objectives
      skills
      description
      minUserCount
      maxUserCount
      estimateTime
      difficulty
      currRegisteredTeamCount
      closedTeamCount
      averagePassFinalMark
      validatedRate {
        total
        fields {
          key
          value
        }
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
    objectives,
    skills,
    description,
    minUserCount,
    maxUserCount,
    estimateTime,
    difficulty,
    currRegisteredTeamCount,
    closedTeamCount,
    averagePassFinalMark,
    validatedRate,
  } = data.getProjectInfo;

  const labels = validatedRate.fields.map(({ key }) => key);
  const series = validatedRate.fields.map(({ value }) => value);

  const getPeopleRange = (from: number, to: number) => {
    if (from === to) {
      if (from === 1) return 'Solo';
      return `${from} students`;
    }
    return `${from} ~ ${to} students`;
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
          )} / ${estimateTime} / ${
            difficulty?.toLocaleString() ?? '0'
          } XP`}</Text>
          <HStack spacing="1rem">
            <BsPeopleFill size="16px" />
            <Text>
              {numberWithUnitFormatter(currRegisteredTeamCount, '팀')} 진행 중
            </Text>
          </HStack>
        </VStack>
        <VStack spacing="3rem">
          <HStack spacing="1rem" wrap="wrap">
            {objectives.filter(isDefined).map((text) => (
              <Label
                key={text}
                backgroundColor={theme.colors.accent.default}
                fontWeight={theme.fonts.weight.medium}
              >
                {titleCase(text)}
              </Label>
            ))}
          </HStack>
          <HStack spacing="1rem" wrap="wrap">
            {skills.filter(isDefined).map((text) => (
              <Label key={text} fontWeight={theme.fonts.weight.medium}>
                {titleCase(text)}
              </Label>
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
          <ProjectResultPercentageChart labels={labels} series={series} />
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
