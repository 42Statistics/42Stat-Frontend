import { DashboardContent } from '@/components/templates/Dashboard';

export const TigCntPerCoalition = () => {
  const title = '이번 달 누적 코알리숑 티그 횟수';
  const description = '(2000.00.00 시작)';

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
