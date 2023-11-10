import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { DailyActivityTableHeader } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableHeader';
import { DailyActivityTableRow } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableWeek';
import { DAY_OF_WEEK } from '@/Profile/dashboard-contents/General/DailyActivities/constants/dayOfWeek';
import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import { groupByDayOfTheWeek } from '@/Profile/dashboard-contents/General/DailyActivities/utils/groupByDayOfTheWeek';
import { matchDatesWithScores } from '@/Profile/dashboard-contents/General/DailyActivities/utils/matchDatesWithScore';
import { CaptionText, HStack, VStack } from '@shared/ui-kit';
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
  const theme = useTheme();
  const dates = getDatesBetween(from, to);
  const datesWithScores = matchDatesWithScores(dates, list);
  const dateGroupsWithScores = Object.values(
    groupByDayOfTheWeek(datesWithScores),
  );

  return (
    <ScrollXArea>
      <VStack align="start" spacing="0.2rem">
        <DailyActivityTableHeader dateGroupsWithScores={dateGroupsWithScores} />
        {dateGroupsWithScores.map((dateGroupWithScores, index) => (
          <HStack spacing="0.2rem" key={index}>
            <CaptionText
              lineHeight={1}
              color={theme.colors.mono.gray400}
              style={{ width: '4rem' }}
            >
              {DAY_OF_WEEK[index]}
            </CaptionText>
            <DailyActivityTableRow
              dateGroupWithScores={dateGroupWithScores}
              color={color}
            />
          </HStack>
        ))}
      </VStack>
    </ScrollXArea>
  );
};

const ScrollXArea = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow-x: auto;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
`;

export const BlankTableData = styled.div`
  width: 1.6rem;
  height: 1.6rem;
`;
