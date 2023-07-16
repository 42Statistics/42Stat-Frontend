import { H3Text, HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { NoneDash } from '../Error/NoneDash';
import { Arrow } from './Arrow';

type NumberCompareProps = {
  curr: number;
  last: number;
  unit: string;
};

export const NumberCompare = ({ curr, last, unit }: NumberCompareProps) => {
  const diff = curr - last;
  const theme = useTheme();
  const color = diff > 0 ? theme.colors.chart.up : theme.colors.chart.down;

  return (
    <HStack spacing="2rem">
      <HStack align="baseline">
        <H3Text>{curr.toLocaleString()}</H3Text>
        <Text>{unit}</Text>
      </HStack>
      {diff !== 0 ? (
        <HStack spacing="0.5rem">
          <Arrow direction={diff > 0 ? 'up' : 'down'} />
          <H3Text color={color}>{Math.abs(diff).toLocaleString()}</H3Text>
        </HStack>
      ) : (
        <NoneDash />
      )}
    </HStack>
  );
};
