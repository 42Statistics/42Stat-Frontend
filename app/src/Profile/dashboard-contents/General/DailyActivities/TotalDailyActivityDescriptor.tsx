import { useAtomValue } from 'jotai';

import { MINUTES } from '@shared/constants/date';
import { BoldText, Text } from '@shared/ui-kit';

import { dailyActivitySumAtom } from '@/Profile/dashboard-contents/General/atoms/dailyActivitySumAtom';

export const TotalDailyActivityDescriptor = () => {
  const { logTime, event, corrector, corrected } =
    useAtomValue(dailyActivitySumAtom);

  return (
    <div style={{ wordBreak: 'break-all' }}>
      <Text inline>접속&nbsp;</Text>
      <BoldText inline>
        {Math.floor(logTime / MINUTES.HOUR).toLocaleString()}
      </BoldText>
      <Text inline>시간 •&nbsp;</Text>
      <Text inline>아젠다&nbsp;</Text>
      <BoldText inline>{event.toLocaleString()}</BoldText>
      <Text inline>개 참여 •&nbsp;</Text>
      <Text inline>평가&nbsp;</Text>
      <BoldText inline>{corrector.toLocaleString()}</BoldText>
      <Text inline>건 •&nbsp;</Text>
      <Text inline>피평가&nbsp;</Text>
      <BoldText inline>{corrected.toLocaleString()}</BoldText>
      <Text inline>건</Text>
    </div>
  );
};
