import type { DashboardItemProps } from '@utils/types/Dashboard';

// TODO: 리팩토링 시 DashboardItem 컴포넌트 삭제
export const DashboardItem = ({ content: Content }: DashboardItemProps) => {
  return <Content />;
};
