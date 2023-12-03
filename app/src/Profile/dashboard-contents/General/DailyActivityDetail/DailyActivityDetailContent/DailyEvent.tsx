import { ReactComponent as MdEvent } from '@/Profile/assets/activity/event.svg';
import { BoldText, CaptionText, Text, VStack } from '@shared/ui-kit';
import { TimelineItem } from '../TimelineItem';

type DailyEventProps = {
  data: {
    name: string;
    location: string;
  };
  color: string;
};

export const DailyEvent = ({ data, color }: DailyEventProps) => {
  const { name, location } = data;

  return (
    <TimelineItem icon={<MdEvent width={15} height={15} />} color={color}>
      <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
        <BoldText>{name}</BoldText>
        <Text>{location}</Text>
        <CaptionText>16:30 - 17:00</CaptionText>
      </VStack>
    </TimelineItem>
  );
};
