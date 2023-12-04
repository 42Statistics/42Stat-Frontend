import { ReactComponent as MdLogTime } from '@/Profile/assets/activity/log-time.svg';
import { Text } from '@shared/ui-kit';
import { TimelineItem } from '../TimelineItem';

type DailyLogtimeProps = {
  timeRecord: number;
  color: string;
};

export const DailyLogTime = ({ timeRecord, color }: DailyLogtimeProps) => {
  const [hour, minute] = [Math.floor(timeRecord / 60), timeRecord % 60];

  return (
    <TimelineItem
      icon={<MdLogTime width={15} height={15} />}
      color={color}
      hasVerticalLine={false}
    >
      <Text style={{ marginTop: '0.5rem' }}>
        {hour}시간 {minute}분 접속
      </Text>
    </TimelineItem>
  );
};
