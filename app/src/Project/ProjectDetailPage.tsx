import { Seo } from '@components/elements/Seo';
import { Dashboard } from '@shared/components/Dashboard';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { VStack } from '@shared/ui-kit';
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
