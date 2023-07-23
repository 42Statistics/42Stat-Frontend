import { H2BoldText, H3BoldText, HStack, MediumText } from '@components/common';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@shared/utils/formatters';
import { Link } from 'react-router-dom';

type RankListItemProps = {
  rank: number;
  center?: React.ReactElement;
  link?: string;
  name: string;
  value: number;
  unit: string;
};

export const RankListItem = ({
  rank,
  center,
  name,
  link,
  value,
  unit,
}: RankListItemProps) => {
  const theme = useTheme();
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <HStack w="80%" spacing="2.4rem">
      <H2BoldText color={color}>{rank}</H2BoldText>
      {center}
      <HStack
        w="100%"
        spacing="1rem"
        align="baseline"
        justify="start"
        wrap="wrap"
      >
        {link ? (
          <Link to={link}>
            <H3BoldText color={color}>{name}</H3BoldText>
          </Link>
        ) : (
          <H3BoldText color={color}>{name}</H3BoldText>
        )}
        <MediumText color={color}>
          {numberWithUnitFormatter(value, unit)}
        </MediumText>
      </HStack>
    </HStack>
  );
};
