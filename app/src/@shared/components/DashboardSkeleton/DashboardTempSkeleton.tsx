import styled from '@emotion/styled';

import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import type { DashboardTempProps } from '@shared/types/Dashboard';
import { DashboardRowItemSkeleton } from './DashboardRowItemSkeleton';

type DashboardTempSkeletonProps = Omit<DashboardTempProps, 'contents'>;

export const DashboardTempSkeleton = ({ rows }: DashboardTempSkeletonProps) => {
  return (
    <Layout>
      {rows.map(({ items }, rowIdx) => (
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
