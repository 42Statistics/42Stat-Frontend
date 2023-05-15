import { DashboardContent } from '@/components/templates/Dashboard';

export const MemberRate = () => {
  const title = 'Member 비율';
  const description = '(비활성화 유저도 직전 상태로 포함)';

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
