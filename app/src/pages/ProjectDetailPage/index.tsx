import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { projectDetailPageQueryAtom } from '@atoms/projectDetailPageQueryAtom';
import { VStack } from '@components/common';
import { Seo } from '@components/elements/Seo';
import { Dashboard } from '@components/templates/Dashboard';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectIntroduction } from './ProjectIntroduction';
import { useProjectDetailPageDashboard } from './hooks/useProjectDetailPageDashboard';

const GET_PROJECT_INFO_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetProjectInfoByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      name
      description
      minUserCount
      maxUserCount
      estimateTime
      difficulty
      currRegisteredTeamCount
      closedTeamCount
      averagePassFinalMark
      objectives
      skills
      validatedRate {
        ...validatedRateFields
      }
    }
  }

  fragment validatedRateFields on Rate {
    total
    fields {
      key
      value
    }
  }
`);

const ProjectDetailPage = () => {
  const { projectName } = useParams() as { projectName: string };
  const setProjectDetailPageQueryAtom = useSetAtom(projectDetailPageQueryAtom);
  const result = useQuery(GET_PROJECT_INFO_BY_PROJECT_NAME, {
    variables: { projectName },
  });

  useEffect(() => {
    setProjectDetailPageQueryAtom({
      loading: result.loading,
      error: result.error,
      data: result.data,
    });
  }, [result, setProjectDetailPageQueryAtom]);

  return (
    <VStack w="100%" spacing="4rem">
      <ProjectIntroduction />
      <Dashboard {...useProjectDetailPageDashboard()} />
    </VStack>
  );
};

const Head = () => {
  const { projectName } = useParams() as { projectName: string };

  return <Seo title={projectName} />;
};

export default withHead(withFooter(ProjectDetailPage), Head);
