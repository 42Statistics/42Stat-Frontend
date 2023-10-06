import { DateTemplate } from '@shared/__generated__/graphql';
import { useSegmentedControl } from '@shared/hooks/useSegmentedControl';

export function useLeaderboardExpIncrementSegmentedControl() {
  const options = [
    {
      label: '주간',
      value: DateTemplate.CurrWeek,
    },
    {
      label: '월간',
      value: DateTemplate.CurrMonth,
    },
  ];

  const { controlRef, segments } = useSegmentedControl(options);

  return {
    options,
    controlRef,
    segments,
  };
}
