import { useContext, useRef } from 'react';

import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useAtom, useSetAtom } from 'jotai';

import { tooltipAtom } from '@core/atoms/tooltipAtom';

import { DailyActivity } from '@shared/__generated__/graphql';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { isSameDate } from '@shared/utils/isSameDate';

import { getDailyActivityTableDataColor } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getDailyActivityTableDataColor';
import { DailyActivitySquare } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitySquare';
import { selectedDailyActivityAtom } from '@/Profile/dashboard-contents/General/atoms/selectedDailyActivityAtom';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

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
  const { login } = useContext(UserProfileContext);
  const currentRef = useRef<HTMLDivElement>(null);
  const setTooltip = useSetAtom(tooltipAtom);
  const theme = useTheme();
  const color = getDailyActivityTableDataColor(
    score,
    standardColor,
    theme.colors.mono.gray100,
  );
  const [{ date: selectedDate }, setSelectedDailyActivity] = useAtom(
    selectedDailyActivityAtom,
  );
  const isToday = isSameDate(date, new Date());

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setTooltip({
      ref: e.currentTarget,
      position: 'top',
      text: `${dayjs(date).format('YYYY-MM-DD')}: ${numberWithUnitFormatter(
        score,
        unit,
      )}`,
    });
  };
  const handleMouseLeave = () => {
    setTooltip({
      ref: null,
      position: 'top',
      text: '',
    });
  };

  const unit = '점';

  const handleClick = () => {
    setSelectedDailyActivity({
      date: date.toString(),
      records: records,
      login: login,
    });
  };

  return (
    <div
      style={{ position: 'relative' }}
      onClick={handleClick}
      ref={currentRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DailyActivitySquare
        color={isToday ? theme.colors.mono.gray300 : color}
        isSelected={
          selectedDate !== '' && isSameDate(date, new Date(selectedDate))
        }
        hasHoverEffect
      />
    </div>
  );
};
