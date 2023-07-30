import styled from '@emotion/styled';
import type { DashboardProps } from '@shared/types/Dashboard';
import { DashboardRow } from './DashboardRow';
import { DashboardRowItem } from './DashboardRowItem';

export const Dashboard = ({ rows, contents }: DashboardProps) => {
  return (
    <Layout>
      {rows.map(({ colSpan, items }, rowIdx) => (
        <DashboardRow key={rowIdx}>
          {items.map(({ rowSpan, elementId }, itemIdx) => (
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
  gap: 1.6rem;
  width: 100%;
`;
