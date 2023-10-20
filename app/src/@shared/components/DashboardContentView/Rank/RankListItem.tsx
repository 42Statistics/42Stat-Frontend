import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

import { Body1Text, Center, H3Text, HStack, Text } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

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
  const fontWeight =
    rank === 1 ? theme.fonts.weight.bold : theme.fonts.weight.medium;

  return (
    <HStack w="90%" justify="start" spacing="2.4rem">
      <Center w="2rem">
        <H3Text fontWeight={fontWeight}>{rank}</H3Text>
      </Center>
      {center}
      <HStack spacing="1rem" align="baseline" justify="start" wrap="wrap">
        {link ? (
          <Link to={link}>
            <Body1Text fontWeight={fontWeight}>{name}</Body1Text>
          </Link>
        ) : (
          <H3Text fontWeight={fontWeight}>{name}</H3Text>
        )}
        <Text fontWeight={fontWeight}>
          {numberWithUnitFormatter(value, unit)}
        </Text>
      </HStack>
    </HStack>
  );
};
