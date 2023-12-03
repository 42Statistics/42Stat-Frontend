import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';

import { DailyActivitySquare } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitySquare';
import { getDailyActivityTableDataColor } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getDailyActivityTableDataColor';
import { Tooltip } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { DailyActivity } from '@shared/__generated__/graphql';
import { useSetAtom } from 'jotai';
import { dailyActivityAtom } from '../atoms/dailyActivityAtom';

type DailyActivityTableDataProps = {
  date: Date;
  score: number;
  records: DailyActivity['records'];
  color: string;
};

export const DailyActivityTableData = ({
  date,
  score,
  records,
  color: standardColor,
}: DailyActivityTableDataProps) => {
  const theme = useTheme();
  const color = getDailyActivityTableDataColor(
    score,
    standardColor,
    theme.colors.mono.gray100,
  );
  const setActivityDaily = useSetAtom(dailyActivityAtom);

  const unit = '점';

  const handleClick = () => {
    setActivityDaily({ date: date.toDateString(), records: records });
  };

  return (
    <div style={{ position: 'relative' }} onClick={handleClick}>
      <Tooltip.Container>
        <DailyActivitySquare color={color} />
        <Tooltip position="top">
          {`${dayjs(date).format('YYYY-MM-DD')}: ${numberWithUnitFormatter(
            score,
            unit,
          )}`}
        </Tooltip>
      </Tooltip.Container>
    </div>
  );
};
