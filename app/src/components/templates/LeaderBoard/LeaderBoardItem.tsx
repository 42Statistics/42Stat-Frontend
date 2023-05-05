import { Avatar, HStack, Spacer, Text } from '@/components/common';
import { numberWithUnitFormatter } from '@/utils/formatters';
import type { RankItemType } from '@/utils/types/Rank';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type LeaderBoardItemProps = {
  rank: number;
  item: RankItemType;
  unit: string;
};

export const LeaderBoardItem = ({ rank, item, unit }: LeaderBoardItemProps) => {
  const theme = useTheme();
  const { name, imgUrl, value } = item;
  const color =
    rank === 1 ? theme.colors.primary.default : theme.colors.mono.black;

  return (
    <LeaderBoardItemLayout>
      <HStack w="100%" spacing="4rem">
        <Text
          color={color}
          fontWeight={theme.fonts.weight.bold}
          fontSize={theme.fonts.size.h2}
        >
          {rank}
        </Text>
        <Avatar size="3.5rem" imgUrl={imgUrl} />
        <Text
          color={color}
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.medium}
        >
          {name}
        </Text>
        <Spacer />
        <Text
          color={color}
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.medium}
        >
          {numberWithUnitFormatter(value, unit)}
        </Text>
      </HStack>
    </LeaderBoardItemLayout>
  );
};

export const LeaderBoardItemLayout = styled.li`
  width: 100%;
  padding: 1rem 5rem;
  border-radius: 1rem;
`;
