import { Avatar, HStack, Text } from '@/components/common';
import { numberWithUnitFormatter } from '@/utils/formatters';
import type { RankItemType } from '@/utils/types/Rank';
import { useTheme } from '@emotion/react';

type RankItemProps = {
  rank: number;
  showImg: boolean;
  item: RankItemType;
  unit: string;
};

export const RankItem = ({ rank, showImg, item, unit }: RankItemProps) => {
  const theme = useTheme();
  const { name, value, imgUrl } = item;
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <HStack w="100%" spacing="2rem">
      <Text
        color={color}
        fontWeight={theme.fonts.weight.bold}
        fontSize={theme.fonts.size.h2}
      >
        {rank}
      </Text>
      {showImg ? <Avatar size="3rem" imgUrl={imgUrl} /> : null}
      <HStack
        w="100%"
        spacing="1rem"
        align="baseline"
        justify="start"
        wrap="wrap"
      >
        <Text
          color={color}
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.medium}
        >
          {name}
        </Text>
        <Text color={color} fontWeight={theme.fonts.weight.medium}>
          {numberWithUnitFormatter(value, unit)}
        </Text>
      </HStack>
    </HStack>
  );
};
