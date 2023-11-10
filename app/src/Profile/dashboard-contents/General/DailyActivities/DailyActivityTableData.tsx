import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';

import { DailyActivitySquare } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitySquare';
import { getDailyActivityTableDataColor } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getDailyActivityTableDataColor';
import { Tooltip } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

type DailyActivityTableDataProps = {
  date: Date;
  score: number;
  color: string;
};

export const DailyActivityTableData = ({
  date,
  score,
  color: standardColor,
}: DailyActivityTableDataProps) => {
  const theme = useTheme();
  const color = getDailyActivityTableDataColor(
    score,
    standardColor,
    theme.colors.mono.gray100,
  );

  const unit = '점';

  return (
    <div style={{ position: 'relative' }}>
      <Tooltip.Container>
        <DailyActivitySquare color={color} />
        <Tooltip position="top">{`${dayjs(date).format(
          'YYYY-MM-DD',
        )}: ${numberWithUnitFormatter(score, unit)}`}</Tooltip>
      </Tooltip.Container>
    </div>
  );
};
