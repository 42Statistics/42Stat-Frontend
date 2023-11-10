import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment } from 'react';

import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities';
import { DailyActivityTableData } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTableData';
import { DAY_OF_WEEK } from '@/Profile/dashboard-contents/General/DailyActivities/constants/dayOfWeek';
import { CaptionText, HStack, VStack } from '@shared/ui-kit';
import { getDatesBetween } from '@shared/utils/getDatesBetween';
import { isSameDate } from '@shared/utils/isSameDate';

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
        <HStack h="3rem" spacing="0.2rem">
          <div style={{ width: '4rem' }} />
          {dateGroupsWithScores[dateGroupsWithScores.length - 1].map(
            ({ date }, index) => (
              <BlankTableData key={index}>
                {date.getDate() <= 7 && (
                  <div style={{ position: 'absolute' }}>
                    <CaptionText
                      color={theme.colors.mono.gray400}
                      style={{ wordBreak: 'keep-all' }}
                    >
                      {date.getMonth() + 1}월
                    </CaptionText>
                  </div>
                )}
              </BlankTableData>
            ),
          )}
        </HStack>
        {dateGroupsWithScores.map((dateGroupWithScores, index) => (
          <HStack spacing="0.2rem" key={index}>
            <CaptionText
              lineHeight={1}
              color={theme.colors.mono.gray400}
              style={{ width: '4rem' }}
            >
              {DAY_OF_WEEK[index]}
            </CaptionText>
            {dateGroupWithScores.map(({ score, date }, index) => (
              <Fragment key={index}>
                {score === -1 ? (
                  <BlankTableData />
                ) : (
                  <DailyActivityTableData
                    date={date}
                    score={score}
                    color={color}
                  />
                )}
              </Fragment>
            ))}
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
  margin: auto;
  position: relative;
`;

const BlankTableData = styled.div`
  width: 1.6rem;
  height: 1.6rem;
`;

// 첫 날짜가 수요일이라면, 일요일부터 화요일까지는 한 칸을 -1로 채움.
const groupByDayOfTheWeek = (datesWithScores: DateWithScore[]) => {
  const group = datesWithScores.reduce(
    (acc, dateWithScore) => {
      const day = dateWithScore.date.getDay();
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(dateWithScore);
      return acc;
    },
    {} as Record<number, DateWithScore[]>,
  );

  const dayOfFirstDate = datesWithScores[0].date.getDay();

  for (let day = 0; day < dayOfFirstDate; day++) {
    group[day].unshift({ date: new Date(), score: -1 });
  }
  return group;
};

type DateWithScore = {
  date: Date;
  score: number;
};

const matchDatesWithScores = (
  dates: Date[],
  scores: DailyActivityScore[],
): DateWithScore[] => {
  let currentScoreIndex = 0;

  return dates.map((date) => {
    if (currentScoreIndex >= scores.length) {
      return { date, score: 0 };
    }
    const dailyActivityScore = scores[currentScoreIndex];
    if (isSameDate(dailyActivityScore.date, date)) {
      currentScoreIndex++;
      return { date, score: dailyActivityScore.score };
    }
    return { date, score: 0 };
  });
};
