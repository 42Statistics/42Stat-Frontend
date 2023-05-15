import { DashboardContent } from '@/components/templates/Dashboard';

export const CurrWeekAverageEvalCnt = () => {
  const title = '주간 1인당 평가 횟수';
  const description = `(2000.00.00 ~ 2000.00.00 / 1주)`;

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
