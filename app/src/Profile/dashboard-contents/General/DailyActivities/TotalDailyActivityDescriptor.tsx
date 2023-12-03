import { useAtomValue } from 'jotai';

import { activitySumAtom } from '@/Profile/dashboard-contents/General/atoms/activitySumAtom';
import { MINUTES } from '@shared/constants/date';
import { BoldText, Text } from '@shared/ui-kit';

export const TotalDailyActivityDescriptor = () => {
  const activitySum = useAtomValue(activitySumAtom);

  return (
    <div style={{ wordBreak: 'break-all' }}>
      <Text inline>접속&nbsp;</Text>
      <BoldText inline>
        {Math.floor(activitySum.logTime / MINUTES.HOUR).toLocaleString()}
      </BoldText>
      <Text inline>시간 •&nbsp;</Text>
      <Text inline>아젠다&nbsp;</Text>
      <BoldText inline>{activitySum.event.toLocaleString()}</BoldText>
      <Text inline>개 참여 •&nbsp;</Text>
      <Text inline>평가&nbsp;</Text>
      <BoldText inline>{activitySum.corrector.toLocaleString()}</BoldText>
      <Text inline>건 •&nbsp;</Text>
      <Text inline>피평가&nbsp;</Text>
      <BoldText inline>{activitySum.corrected.toLocaleString()}</BoldText>
      <Text inline>건</Text>
    </div>
  );
};
