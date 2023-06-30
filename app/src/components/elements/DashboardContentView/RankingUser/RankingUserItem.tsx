import type { RankingUserItemType } from '@/types/Ranking';
import {
  Avatar,
  H2BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { ROUTES } from '@routes/ROUTES';
import { numberWithUnitFormatter } from '@utils/formatters';
import { Link } from 'react-router-dom';

type RankingUserItemProps = {
  item: RankingUserItemType;
  unit: string;
};

export const RankingUserItem = ({ item, unit }: RankingUserItemProps) => {
  const theme = useTheme();
  const { name, value, rank, imgUrl } = item;
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <HStack w="80%" spacing="2rem">
      <H2BoldText color={color}>{rank}</H2BoldText>
      <Avatar src={imgUrl} />
      <HStack
        w="100%"
        spacing="1rem"
        align="baseline"
        justify="start"
        wrap="wrap"
      >
        <Link to={`${ROUTES.PROFILE_ROOT}/${name}`}>
          <H3MediumText color={color}>{name}</H3MediumText>
        </Link>
        <MediumText color={color}>
          {numberWithUnitFormatter(value, unit)}
        </MediumText>
      </HStack>
    </HStack>
  );
};
