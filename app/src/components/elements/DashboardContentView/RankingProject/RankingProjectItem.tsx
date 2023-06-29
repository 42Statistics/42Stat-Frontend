import type { RankingItemType } from '@/types/Ranking';
import {
  H2BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import { Link } from 'react-router-dom';

type RankingProjectItemProps = {
  item: RankingItemType;
  unit: string;
};

export const RankingProjectItem = ({ item, unit }: RankingProjectItemProps) => {
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
        <Link to={`/project/${name}`}>
          <H3MediumText color={color}>{name}</H3MediumText>
        </Link>
        <MediumText color={color}>
          {numberWithUnitFormatter(value, unit)}
        </MediumText>
      </HStack>
    </HStack>
  );
};
