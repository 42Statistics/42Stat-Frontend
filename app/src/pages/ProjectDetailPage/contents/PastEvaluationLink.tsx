import { AccentH3BoldText, Center } from '@components/common';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Link, useParams } from 'react-router-dom';

export const PastEvaluationLink = () => {
  const { projectName } = useParams() as { projectName: string };
  const title = '지난 평가 보기';

  return (
    <DashboardContent title={title}>
      <Center w="100%" h="100%">
        <Link to={`/evallog?projectName=${projectName}`}>
          <AccentH3BoldText>Past Evaluations</AccentH3BoldText>
        </Link>
      </Center>
    </DashboardContent>
  );
};
