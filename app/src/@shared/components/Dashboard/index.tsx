import styled from '@emotion/styled';

import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import { DashboardRowItem } from '@shared/components/Dashboard/DashboardRowItem';
import { useSelectDashboardRowsByDevice } from '@shared/components/Dashboard/hooks/useSelectDashboardRowsByDevice';
import type { DashboardProps } from '@shared/types/Dashboard';

export const Dashboard = ({
  defaultRows,
  desktopRows,
  tabletRows,
  mobileRows,
  contents,
}: DashboardProps) => {
  const { rows } = useSelectDashboardRowsByDevice({
    defaultRows,
    desktopRows,
    tabletRows,
    mobileRows,
  });

  const findContentById = (elementId: number) => {
    const foundContent = contents.find((content) => content.id === elementId);
    if (foundContent === undefined) {
      throw new Error(`Content with ID ${elementId} not found`);
    }
    return foundContent;
  };

  return (
    <Layout>
      {rows.map(({ items }, rowIdx) => (
        <DashboardRow key={rowIdx}>
          {items.map(({ rowSpan, colSpan, elementId }, itemIdx) => (
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
