import {
  Avatar,
  H2BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import type { RankingUserItemType } from '@utils/types/Ranking';
import { Link } from 'react-router-dom';

type RankingUserItemProps = {
  showImg: boolean;
  item: RankingUserItemType;
  unit: string;
};

export const RankingUserItem = ({
  showImg,
  item,
  unit,
}: RankingUserItemProps) => {
  const theme = useTheme();
  const { name, value, rank, imgUrl } = item;
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <HStack w="70%" spacing="2rem">
      <H2BoldText color={color}>{rank}</H2BoldText>
      {showImg ? <Avatar src={imgUrl} /> : null}
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
