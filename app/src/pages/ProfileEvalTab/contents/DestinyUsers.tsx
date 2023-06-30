import { DashboardContent } from '@components/templates/DashboardContent';

export const DestinyUsers = () => {
  const title = '운명의 장난 스코어';
  const description = '평가에서 가장 자주 마주친 유저 랭킹';

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
