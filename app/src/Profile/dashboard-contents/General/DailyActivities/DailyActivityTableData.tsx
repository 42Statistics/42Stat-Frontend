import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';

import { DailyActivitySquare } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitySquare';
import { getDailyActivityTableDataColor } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getDailyActivityTableDataColor';
import { DailyActivity } from '@shared/__generated__/graphql';
import { Tooltip } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { useSetAtom } from 'jotai';
import { selectedDailyActivityAtom } from '../atoms/selectedDailyActivityAtom';

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
  const setSelectedDailyActivity = useSetAtom(selectedDailyActivityAtom);

  const unit = '점';

  const handleClick = () => {
    setSelectedDailyActivity({ date: date.toString(), records: records });
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
