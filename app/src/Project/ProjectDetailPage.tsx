import { VStack } from '@components/common';
import { Seo } from '@components/elements/Seo';
import { Dashboard } from '@components/templates/Dashboard';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { useParams } from 'react-router-dom';
import { ProjectIntroduction } from './components/ProjectIntroduction';
import { useProjectDetailPageDashboard } from './hooks/useProjectDetailPageDashboard';

const ProjectDetailPage = () => {
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
