import { DashboardContent } from '@/components/templates/Dashboard';

export const BlackholedRate = () => {
  const title = '블랙홀 유저 비율';
  const description = '(비활성화 Member는 Survived에 포함)';

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
