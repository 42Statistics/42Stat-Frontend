import { InfoTooltip } from '@shared/components/InfoTooltip';
import { H2BoldText, H2Text, HStack, Text, VStack } from '@shared/ui-kit';

type DailyActivityTitleDescriptorProps = {
  year: number | null;
  total: number;
};

export const DailyActivityTitleDescriptor = ({
  year,
  total,
}: DailyActivityTitleDescriptorProps) => {
  const unit = '년';

  return (
    <VStack align="start" style={{ marginLeft: '1rem' }}>
      <Text>{year !== null ? `${year}${unit}` : `최근 1${unit}`} 기준</Text>
      <HStack spacing="1rem">
        <div>
          <H2Text inline>총 </H2Text>
          <H2BoldText inline>{total.toLocaleString()}</H2BoldText>
          <H2Text inline>점</H2Text>
        </div>
        <InfoTooltip
          position="right"
          text="접속 시간당 1점, 평가 · 피평가 · 아젠다 참여 시 1점이 쌓입니다."
        />
      </HStack>
    </VStack>
  );
};
