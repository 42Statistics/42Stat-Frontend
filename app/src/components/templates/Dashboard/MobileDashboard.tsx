import { DashboardItem } from '@/components/templates/DashboardItem';
import { DashboardItemWrapper } from '@/components/templates/DashboardItemWrapper';
import { MobileDashboardRow } from '@/components/templates/DashboardRow';
import { MobileDashboardRowContainer } from '@/components/templates/DashboardRowContainer';
import {
  DashboardItemProps,
  MobileDashboardRowType,
} from '@/utils/types/Dashboard';

type MobileDashboardProps = {
  rows: MobileDashboardRowType[];
  contents: DashboardItemProps[];
};

export const MobileDashboard = ({ rows, contents }: MobileDashboardProps) => {
  return (
    <MobileDashboardRowContainer>
      {rows.map(({ row, col, items }, rowIdx) => (
        <MobileDashboardRow key={rowIdx} row={row} col={col}>
          {items.map(({ row, col, rowSpan, colSpan, elementId }, itemIdx) => (
            <DashboardItemWrapper
              key={itemIdx}
              row={row}
              col={col}
              rowSpan={rowSpan}
              colSpan={colSpan}
              element={
                <DashboardItem
                  title={contents[elementId].title}
                  description={contents[elementId].description}
                  content={contents[elementId].content}
                />
              }
            />
          ))}
        </MobileDashboardRow>
      ))}
    </MobileDashboardRowContainer>
  );
};
