import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

export const DestinyRanking = () => {
  const { username } = useParams() as { username: string };

  const title = '인연 스코어';
  const description = `${username}의 여행 동반자들`;

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
