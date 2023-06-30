import { AccentH3BoldText } from '@components/common';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Link, useParams } from 'react-router-dom';

export const ProjectUrl = () => {
  const { projectName } = useParams() as { projectName: string };
  const title = 'Intra 프로젝트 링크';
  const link = '';

  return (
    <DashboardContent title={title}>
      <Link to={link}>
        <AccentH3BoldText>바로가기</AccentH3BoldText>
      </Link>
    </DashboardContent>
  );
};
