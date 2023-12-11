import { rgba } from 'emotion-rgba';

import { SCORE_BREAKPOINTS } from '@/Profile/dashboard-contents/General/DailyActivities/constants/scoreBreakpoints';

export const getDailyActivityTableDataColor = (
  score: number,
  standardColor: string,
  defaultColor: string,
) => {
  if (score === 0) {
    return defaultColor;
  }
  const totalIntervalLength = SCORE_BREAKPOINTS.length + 1;
  const currentIntervalIndex = SCORE_BREAKPOINTS.findIndex(
    (breakpoint) => score < breakpoint,
  );

  if (currentIntervalIndex === -1) {
    return standardColor;
  }

  const rate = (currentIntervalIndex + 1) / (totalIntervalLength + 1);

  return rgba(standardColor, rate);
};
