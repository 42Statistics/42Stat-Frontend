import { DashboardContent } from '@components/templates/DashboardContent';

export const AverageFinalMark = () => {
  const title = '평균 평가 점수';
  const description = '평가자일 때';

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
