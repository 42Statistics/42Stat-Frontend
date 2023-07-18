import { DashboardContent } from '@components/templates/DashboardContent';

export const LevelRecords = () => {
  const title = '레벨 증가 그래프';
  const description = '본과정 시작일로부터 최대 24개월';

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};
