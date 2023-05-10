import type { DashboardItemProps } from '@/utils/types/Dashboard';
import styled from '@emotion/styled';

export const DashboardItem = ({ id, content: Content }: DashboardItemProps) => {
  return (
    <DashboardItemLayout>
      <Content />
    </DashboardItemLayout>
  );
};

const DashboardItemLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
