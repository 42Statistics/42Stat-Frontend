import { useTheme } from '@emotion/react';

import { HStack } from '@shared/ui-kit';

import { SCORE_BREAKPOINTS } from '@/Profile/dashboard-contents/General/DailyActivities/constants/scoreBreakpoints';
import { getDailyActivityTableDataColor } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getDailyActivityTableDataColor';

import { ColorLegend } from './ColorLegend';

type ColorLegendListProps = {
  color: string;
};

type Interval = {
  from?: number;
  to?: number;
};

export const ColorLegendList = ({ color }: ColorLegendListProps) => {
  const theme = useTheme();
  const intervals: Interval[] = [{ to: SCORE_BREAKPOINTS[0] - 1 }];

  SCORE_BREAKPOINTS.forEach((breakpoint, index) => {
    if (index === SCORE_BREAKPOINTS.length - 1) {
      intervals.push({
        from: breakpoint,
      });
      return;
    }
    intervals.push({
      from: breakpoint,
      to: SCORE_BREAKPOINTS[index + 1] - 1,
    });
  });

  return (
    <HStack spacing="2rem" wrap="wrap">
      {intervals.map((interval, index) => (
        <ColorLegend
          key={index}
          from={interval.from}
          to={interval.to}
          color={getDailyActivityTableDataColor(
            interval.from ?? interval.to ?? 0,
            color,
            theme.colors.mono.gray100,
          )}
        />
      ))}
    </HStack>
  );
};
