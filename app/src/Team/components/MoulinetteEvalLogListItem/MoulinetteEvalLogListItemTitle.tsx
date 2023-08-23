import { BoldText, PrimaryBoldText, Text } from '@shared/ui-kit';
import dayjs from 'dayjs';

type MoulinetteEvalLogListItemTitleProps = {
  createdAt: string;
};

export const MoulinetteEvalLogListItemTitle = ({
  createdAt,
}: MoulinetteEvalLogListItemTitleProps) => {
  return (
    <div>
      <PrimaryBoldText inline>🐈 Moulinette</PrimaryBoldText>
      <Text inline>이&nbsp;</Text>
      <BoldText inline>{dayjs(createdAt).format('YYYY-MM-DD HH:mm')}</BoldText>
      <Text inline>에 자동 평가하였습니다</Text>
    </div>
  );
};
