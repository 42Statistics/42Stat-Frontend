import { useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { differenceInCalendarMonths } from 'date-fns';

import { HStack, VStack } from '@shared/ui-kit';
import { getDatesBetween } from '@shared/utils/getDatesBetween';

import { DailyActivityTableDayOfWeekHeader } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableDayOfWeekHeader';
import { DailyActivityTableHeader } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableHeader';
import { DailyActivityTableRow } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableWeek';
import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import { groupByDayOfTheWeek } from '@/Profile/dashboard-contents/General/DailyActivities/utils/groupByDayOfTheWeek';
import { matchDatesWithScores } from '@/Profile/dashboard-contents/General/DailyActivities/utils/matchDatesWithScore';

type DailyActivityTableProps = {
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
}: DailyActivityTableProps) => {
  const dates = getDatesBetween(from, to);
  const datesWithScores = matchDatesWithScores(dates, list);
  const dateGroupsWithScores = Object.values(
    groupByDayOfTheWeek(datesWithScores),
  );

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const tableRowRef = useRef<HTMLDivElement>(null);
  const tableWithHeaderRef = useRef<HTMLDivElement>(null);
  const latestDailyActivity = datesWithScores.findLast(
    (dailyActivity) => dailyActivity.records.length > 0,
  );

  useEffect(() => {
    if (
      scrollAreaRef.current === null ||
      tableRowRef.current === null ||
      tableWithHeaderRef.current === null ||
      latestDailyActivity === undefined
    ) {
      return;
    }

    const scrollAreaWidth = scrollAreaRef.current.clientWidth;
    const tableWidth = tableRowRef.current.clientWidth;
    const tableWithHeaderWidth = tableWithHeaderRef.current.clientWidth;
    const headerWidth = tableWithHeaderWidth - tableWidth;
    const monthDiff = differenceInCalendarMonths(
      latestDailyActivity.date,
      datesWithScores[0].date,
    );
    const currentDateScrollLeft =
      (tableWidth * monthDiff) / 12 - scrollAreaWidth / 2 + headerWidth;

    scrollAreaRef.current.scrollTo({
      left: currentDateScrollLeft,
      behavior: 'smooth',
    });
  }, [
    scrollAreaRef,
    tableRowRef,
    datesWithScores,
    latestDailyActivity,
    tableWithHeaderRef,
  ]);

  return (
    <ScrollXArea ref={scrollAreaRef}>
      <HStack ref={tableWithHeaderRef}>
        <DailyActivityTableDayOfWeekHeader />
        <VStack align="start">
          <DailyActivityTableHeader
            dateGroupsWithScores={dateGroupsWithScores}
          />
          <VStack align="start" spacing="0.2rem">
            {dateGroupsWithScores.map((dateGroupWithScores, index) => (
              <HStack spacing="0.2rem" ref={tableRowRef} key={index}>
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
  padding: 1rem 0;
  position: relative;
`;

export const BlankTableData = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;
