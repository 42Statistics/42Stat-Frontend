import { useTheme } from '@emotion/react';
import { Text } from '@shared/ui-kit';
import { getStartEndDateString } from '@shared/utils/getStartEndDateString';

type LeaderboardDateDescriptorProps = {
  start: Date;
  end: Date;
};

export default function LeaderboardDateDescriptor({
  start,
  end,
}: LeaderboardDateDescriptorProps) {
  const theme = useTheme();

  return (
    <Text color={theme.colors.mono.gray500}>
      집계기간 :&nbsp;
      {getStartEndDateString(start, end, 'YYYY-MM-DD')}
    </Text>
  );
}
