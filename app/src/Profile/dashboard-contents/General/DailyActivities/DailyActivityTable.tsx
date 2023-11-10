import styled from '@emotion/styled';

import { DailyActivityTableDayOfWeekHeader } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableDayOfWeekHeader';
import { DailyActivityTableHeader } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableHeader';
import { DailyActivityTableRow } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableWeek';
import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import { groupByDayOfTheWeek } from '@/Profile/dashboard-contents/General/DailyActivities/utils/groupByDayOfTheWeek';
import { matchDatesWithScores } from '@/Profile/dashboard-contents/General/DailyActivities/utils/matchDatesWithScore';
import { HStack, VStack } from '@shared/ui-kit';
import { getDatesBetween } from '@shared/utils/getDatesBetween';

type DailyActivitiyTableProps = {
  list: DailyActivityScore[];
  color: string;
  from: Date;
  to: Date;
};

// FIXME: overflow 내의 tooltip이 잘림.
// Ref. https://stackoverflow.com/questions/40093740/tooltip-element-with-absolute-positioning-being-clipped-by-container-with-overfl
export const DailyActivityTable = ({
  list,
  color,
  from,
  to,
}: DailyActivitiyTableProps) => {
  const dates = getDatesBetween(from, to);
  const datesWithScores = matchDatesWithScores(dates, list);
  const dateGroupsWithScores = Object.values(
    groupByDayOfTheWeek(datesWithScores),
  );

  return (
    <ScrollXArea>
      <HStack style={{ margin: '0 auto' }}>
        <DailyActivityTableDayOfWeekHeader />
        <VStack align="start">
          <DailyActivityTableHeader
            dateGroupsWithScores={dateGroupsWithScores}
          />
          <VStack align="start" spacing="0.2rem">
            {dateGroupsWithScores.map((dateGroupWithScores, index) => (
              <HStack spacing="0.2rem" key={index}>
                <DailyActivityTableRow
                  dateGroupWithScores={dateGroupWithScores}
                  color={color}
                />
              </HStack>
            ))}
          </VStack>
        </VStack>
      </HStack>
    </ScrollXArea>
  );
};

const ScrollXArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
`;

export const BlankTableData = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;