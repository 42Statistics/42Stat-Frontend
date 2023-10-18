import styled from '@emotion/styled';
import type { DashboardTempProps } from '@shared/types/Dashboard';
import { DashboardRow } from './DashboardRow';
import { DashboardRowItem } from './DashboardRowItem';

//rowSpan,colSpan이 한 배열에 같이 있는 구조
export const DashboardTemp = ({ rows, contents }: DashboardTempProps) => {
  return (
    <Layout>
      {rows.map(({ items }, rowIdx) => (
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
  gap: 1.6rem;
  width: 100%;
`;
