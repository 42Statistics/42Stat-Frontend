import styled from '@emotion/styled';

import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import { DashboardRowItem } from '@shared/components/Dashboard/DashboardRowItem';
import type { DashboardProps } from '@shared/types/Dashboard';

export const Dashboard = ({ rows, contents }: DashboardProps) => {
  const findContentById = (elementId: number) => {
    const foundContent = contents.find((content) => content.id === elementId);
    if (foundContent === undefined) {
      throw new Error(`Content with ID ${elementId} not found`);
    }
    return foundContent;
  };

  return (
    <Layout>
      {rows.map(({ colSpan, items }, rowIdx) => (
        <DashboardRow key={rowIdx}>
          {items.map(({ rowSpan, elementId }, itemIdx) => (
            <DashboardRowItem
              key={itemIdx}
              rowSpan={rowSpan}
              colSpan={colSpan}
              content={findContentById(elementId).content}
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
