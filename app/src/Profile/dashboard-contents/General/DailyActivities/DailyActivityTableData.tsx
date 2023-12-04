import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';

import { DailyActivitySquare } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitySquare';
import { getDailyActivityTableDataColor } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getDailyActivityTableDataColor';
import { DailyActivity } from '@shared/__generated__/graphql';
import { Tooltip } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { isSameDate } from '@shared/utils/isSameDate';
import { selectedDailyActivityAtom } from '../atoms/selectedDailyActivityAtom';
import { currentDateScrollLeftAtom } from './atoms/currentDateScrollLeftAtom';

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
  const currentRef = useRef<HTMLDivElement>(null);
  const isMatch = isSameDate(date, new Date());
  const setCurrentDateScrollLeft = useSetAtom(currentDateScrollLeftAtom);

  const unit = '점';

  const handleClick = () => {
    setSelectedDailyActivity({ date: date.toString(), records: records });
  };

  useEffect(() => {
    if (!isMatch) {
      return;
    }

    if (currentRef.current === null) {
      return;
    }

    const targetRect = currentRef.current.getBoundingClientRect();
    setCurrentDateScrollLeft(targetRect.left);

    return () => {
      setCurrentDateScrollLeft(0);
    };
  }, [isMatch, setCurrentDateScrollLeft]);

  return (
    <div
      style={{ position: 'relative' }}
      onClick={handleClick}
      ref={currentRef}
    >
      <Tooltip.Container>
        <DailyActivitySquare
          color={isMatch ? theme.colors.mono.gray300 : color}
          hasHoverEffect
        />
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
