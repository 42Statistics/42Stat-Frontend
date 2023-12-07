import { ReactComponent as MdLogTime } from '@/Profile/assets/activity/log-time.svg';
import { Text } from '@shared/ui-kit';
import { TimelineItem } from '../TimelineItem';

type DailyLogtimeProps = {
  dailyLogtime: number;
  color: string;
};

export const DailyLogTime = ({ dailyLogtime, color }: DailyLogtimeProps) => {
  const [hour, minute] = [Math.floor(dailyLogtime / 60), dailyLogtime % 60];

  return (
    <TimelineItem
      icon={<MdLogTime width={15} height={15} />}
      color={color}
      hasVerticalLine={false}
    >
      <Text style={{ marginTop: '0.5rem' }}>
        {dailyLogtime === 0 ? '접속 기록 없음' : `${hour}시간 ${minute}분 접속`}
      </Text>
    </TimelineItem>
  );
};
