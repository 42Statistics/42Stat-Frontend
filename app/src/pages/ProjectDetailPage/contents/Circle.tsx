import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

export const Circle = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '서클';

  const circle = 3;
  const unit = '서클';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={circle} unit={unit} />
    </DashboardContent>
  );
};
