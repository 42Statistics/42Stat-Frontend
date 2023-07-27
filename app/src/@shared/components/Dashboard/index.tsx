import styled from '@emotion/styled';
import type { DashboardProps } from '@shared/types/Dashboard';
import { DashboardRow } from './DashboardRow';
import { DashboardRowItem } from './DashboardRowItem';

export const Dashboard = ({ rows, contents }: DashboardProps) => {
  return (
    <Layout>
      {rows.map((items, rowIdx) => (
        <DashboardRow key={rowIdx}>
          {items.map(({ rowSpan, colSpan, elementId }, itemIdx) => (
            <DashboardRowItem
              key={itemIdx}
              rowSpan={rowSpan}
              colSpan={colSpan}
              content={contents[elementId].content}
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
