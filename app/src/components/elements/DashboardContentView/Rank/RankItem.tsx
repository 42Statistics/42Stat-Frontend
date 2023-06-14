import {
  H2BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import type { RankItemType } from '@utils/types/Rank';

type RankItemProps = {
  rank: number;
  item: RankItemType;
  unit: string;
};

export const RankItem = ({ item, unit }: RankItemProps) => {
  const theme = useTheme();
  const { name, value, rank } = item;
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <HStack w="70%" spacing="2rem">
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
