import { useTheme } from '@emotion/react';
import {
  Center,
  H2MediumText,
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
        <H2MediumText color={color}>{rank}</H2MediumText>
      </Center>
      {center}
      <HStack spacing="1rem" align="baseline" justify="start" wrap="wrap">
        {link ? (
          <Link to={link}>
            <H3MediumText color={color}>{name}</H3MediumText>
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
