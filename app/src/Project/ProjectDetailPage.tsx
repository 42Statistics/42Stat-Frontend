import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { VStack } from '@shared/ui-kit';
import { useParams } from 'react-router-dom';
import { ProjectIntroduction } from './components/ProjectIntroduction';
import { useProjectDetailPageDashboard } from './dashboard-hooks/useProjectDetailPageDashboard';

const GET_PROJECT_EXISTS = gql(/* GraphQL */ `
  query GetProjectExists($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      name
    }
  }
`);

const ProjectDetailPage = () => {
  const { projectName } = useParams() as { projectName: string };
  const { loading, error, data } = useQuery(GET_PROJECT_EXISTS, {
    variables: {
      projectName,
    },
  });

  const projectDetailPageDashboard = useProjectDetailPageDashboard();

  if (loading) {
    return null; // TODO: Skeleton
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }

  return (
    <VStack w="100%" spacing="4rem">
      <ProjectIntroduction />
      <Dashboard {...projectDetailPageDashboard} />
    </VStack>
  );
};

const Head = () => {
  const { projectName } = useParams() as { projectName: string };

  return <Seo title={projectName} />;
};

export default withHead(withFooter(ProjectDetailPage), Head);
