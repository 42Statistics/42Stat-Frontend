import styled from '@emotion/styled';
import type { DashboardProps } from '@shared/types/Dashboard';
import { DashboardRow } from '../Dashboard/DashboardRow';
import { DashboardRowItemSkeleton } from './DashboardRowItemSkeleton';

type DashboardSkeletonProps = Omit<DashboardProps, 'contents'>;

export const DashboardSkeleton = ({ rows }: DashboardSkeletonProps) => {
  return (
    <Layout>
      {rows.map((items, rowIdx) => (
        <DashboardRow key={rowIdx}>
          {items.map(({ rowSpan, colSpan }, itemIdx) => (
            <DashboardRowItemSkeleton
              key={itemIdx}
              rowSpan={rowSpan}
              colSpan={colSpan}
            />
          ))}
        </DashboardRow>
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
