import { useTheme } from '@emotion/react';

import { CaptionText, HStack } from '@shared/ui-kit';

import { DailyActivitySquare } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitySquare';

type ColorLegendProps = {
  from?: number;
  to?: number;
  color: string;
};

export const ColorLegend = ({ from, to, color }: ColorLegendProps) => {
  const theme = useTheme();

  return (
    <HStack spacing="0.4rem">
      <DailyActivitySquare color={color} />
      <CaptionText color={theme.colors.mono.gray400}>
        {from ?? ''}~{to ?? ''}
      </CaptionText>
    </HStack>
  );
};
