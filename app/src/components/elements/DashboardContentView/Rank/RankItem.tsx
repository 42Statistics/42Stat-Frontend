import {
  Avatar,
  H2BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@/components/common';
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
      <H2BoldText color={color}>{rank}</H2BoldText>
      {showImg ? <Avatar size="3rem" imgUrl={imgUrl} /> : null}
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
