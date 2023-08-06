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
import { ProjectNameContext } from './contexts/ProjectNameContext';
import { projectDetailPageDashboardContents } from './dashboard-frames/projectDetailPageDashboardContents';
import { projectDetailPageDashboardRows } from './dashboard-frames/projectDetailPageDashboardRows';

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
    <ProjectNameContext.Provider value={projectName}>
      <VStack w="100%" spacing="4rem">
        <ProjectIntroduction />
        <Dashboard
          contents={projectDetailPageDashboardContents}
          rows={projectDetailPageDashboardRows}
        />
      </VStack>
    </ProjectNameContext.Provider>
  );
};

const Head = () => {
  const { projectName } = useParams() as { projectName: string };

  return <Seo title={projectName} />;
};

export default withHead(withFooter(ProjectDetailPage), Head);
