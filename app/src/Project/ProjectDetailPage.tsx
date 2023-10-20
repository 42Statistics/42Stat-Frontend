import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ProjectIntroduction } from '@/Project/components/ProjectIntroduction';
import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';
import { projectDetailPageDashboardContents } from '@/Project/dashboard-frames/projectDetailPageDashboardContents';
import { projectDetailPageDashboardRows } from '@/Project/dashboard-frames/projectDetailPageDashboardRows';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { VStack } from '@shared/ui-kit';

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
    <>
      <Seo title={projectName} />
      <ProjectNameContext.Provider value={projectName}>
        <VStack w="100%" spacing="4rem">
          <ProjectIntroduction />
          <Dashboard
            contents={projectDetailPageDashboardContents}
            rows={projectDetailPageDashboardRows}
          />
        </VStack>
      </ProjectNameContext.Provider>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
