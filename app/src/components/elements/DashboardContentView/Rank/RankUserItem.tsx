import {
  Avatar,
  H2BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import type { RankUserItemType } from '@utils/types/Rank';
import { Link } from 'react-router-dom';

type RankUserItemProps = {
  rank: number;
  showImg: boolean;
  item: RankUserItemType;
  unit: string;
};

export const RankUserItem = ({
  rank,
  showImg,
  item,
  unit,
}: RankUserItemProps) => {
  const theme = useTheme();
  const { name, value, imgUrl } = item;
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <HStack w="70%" spacing="2rem">
      <H2BoldText color={color}>{rank}</H2BoldText>
      {showImg ? <Avatar size="3rem" imgUrl={imgUrl} /> : null}
      <HStack
        w="100%"
        spacing="1rem"
        align="baseline"
        justify="start"
        wrap="wrap"
      >
        <Link to={`/profile/${name}`}>
          <H3MediumText color={color}>{name}</H3MediumText>
        </Link>
        <MediumText color={color}>
          {numberWithUnitFormatter(value, unit)}
        </MediumText>
      </HStack>
    </HStack>
  );
};
