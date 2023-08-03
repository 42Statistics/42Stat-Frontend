import { useTheme } from '@emotion/react';
import { UserRank } from '@shared/__generated__/graphql';
import { HStack, Spacer, Text, VStack } from '@shared/ui-kit';
import dayjs from 'dayjs';
import { LeaderboardList } from './LeaderboardList';
import { LeaderboardListItem } from './LeaderboardListItem';

type LeaderboardProps = {
  list: UserRank[];
  me?: UserRank | null;
  unit?: string;
  fixedNumber?: number;
  start: Date;
  end: Date;
};
export const Leaderboard = ({
  list,
  me,
  unit,
  fixedNumber,
  start,
  end,
}: LeaderboardProps) => {
  const theme = useTheme();

  return (
    <VStack w="100%" spacing="2rem">
      <HStack w="100%">
        <Spacer />
        <Text color={theme.colors.mono.gray300}>
          집계기간 : {dayjs(start).format('YYYY-MM-DD')} ~&nbsp;
          {dayjs(end).format('YYYY-MM-DD')}
        </Text>
      </HStack>
      {me != null ? (
        <LeaderboardListItem
          item={me}
          unit={unit}
          fixedNumber={fixedNumber}
          isMe
        />
      ) : null}
      <LeaderboardList
        list={list}
        me={me}
        unit={unit}
        fixedNumber={fixedNumber}
      />
    </VStack>
  );
};
