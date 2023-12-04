import styled from '@emotion/styled';

import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import { DashboardRowItem } from '@shared/components/Dashboard/DashboardRowItem';
import type { DashboardTempProps } from '@shared/types/Dashboard';

//rowSpan,colSpan이 한 배열에 같이 있는 구조
export const DashboardTemp = ({ rows, contents }: DashboardTempProps) => {
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
