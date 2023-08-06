import { HStack, PrimaryBoldText, Spacer, Text } from '@shared/ui-kit';
import dayjs from 'dayjs';

type MoulinetteEvalLogListItemTitleProps = {
  createdAt: string;
};

export const MoulinetteEvalLogListItemTitle = ({
  createdAt,
}: MoulinetteEvalLogListItemTitleProps) => {
  return (
    <HStack w="100%" justify="start" wrap="wrap">
      <PrimaryBoldText>🐈 Moulinette</PrimaryBoldText>
      <Text>이&nbsp;</Text>
      <Text>
        <strong>{dayjs(createdAt).format('YYYY-MM-DD HH:mm')}</strong>에 자동
        평가하였습니다
      </Text>
      <Spacer />
    </HStack>
  );
};
