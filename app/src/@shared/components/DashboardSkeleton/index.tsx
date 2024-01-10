import styled from '@emotion/styled';

import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import { useSelectDashboardRowsByDevice } from '@shared/components/Dashboard/hooks/useSelectDashboardRowsByDevice';
import { DashboardRowItemSkeleton } from '@shared/components/DashboardSkeleton/DashboardRowItemSkeleton';
import type { DashboardProps } from '@shared/types/Dashboard';

type DashboardSkeletonProps = Omit<DashboardProps, 'contents'>;

export const DashboardSkeleton = ({
  defaultRows,
  desktopRows,
  tabletRows,
  mobileRows,
}: DashboardSkeletonProps) => {
  const { rows } = useSelectDashboardRowsByDevice({
    defaultRows,
    desktopRows,
    tabletRows,
    mobileRows,
  });

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
