import { useTheme } from '@emotion/react';
import {
  Body1MediumText,
  Center,
  H3BoldText,
  H3MediumText,
  HStack,
  MediumText,
} from '@shared/ui-kit';
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
    <HStack w="90%" justify="start" spacing="2.4rem">
      <Center w="2rem">
        <H3BoldText color={color}>{rank}</H3BoldText>
      </Center>
      {center}
      <HStack spacing="1rem" align="baseline" justify="start" wrap="wrap">
        {link ? (
          <Link to={link}>
            <Body1MediumText color={color}>{name}</Body1MediumText>
          </Link>
        ) : (
          <H3MediumText color={color}>{name}</H3MediumText>
        )}
        <MediumText color={color}>
          {numberWithUnitFormatter(value, unit)}
        </MediumText>
      </HStack>
    </HStack>
  );
};
