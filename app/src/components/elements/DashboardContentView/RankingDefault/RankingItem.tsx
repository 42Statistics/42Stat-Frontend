import {
  H2BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import type { RankingItemType } from '@utils/types/Ranking';

type RankingItemProps = {
  item: RankingItemType;
  unit: string;
};

export const RankingItem = ({ item, unit }: RankingItemProps) => {
  const theme = useTheme();
  const { name, value, rank } = item;
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <HStack w="80%" spacing="2rem">
      <H2BoldText color={color}>{rank}</H2BoldText>
      <HStack
        w="100%"
        spacing="1rem"
        align="baseline"
        justify="start"
        wrap="wrap"
      >
        <H3MediumText color={color}>{name}</H3MediumText>
        <MediumText color={color}>
          {numberWithUnitFormatter(value, unit)}
        </MediumText>
      </HStack>
    </HStack>
  );
};
