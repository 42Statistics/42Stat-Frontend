import { BoldText, PrimaryBoldText, Text } from '@shared/ui-kit';
import dayjs from 'dayjs';

type MoulinetteEvalLogListItemTitleProps = {
  createdAt: string;
};

export const MoulinetteEvalLogListItemTitle = ({
  createdAt,
}: MoulinetteEvalLogListItemTitleProps) => {
  return (
    <span>
      <PrimaryBoldText>🐈 Moulinette</PrimaryBoldText>
      <Text>이&nbsp;</Text>
      <BoldText>{dayjs(createdAt).format('YYYY-MM-DD HH:mm')}</BoldText>
      <Text>에 자동 평가하였습니다</Text>
    </span>
  );
};
