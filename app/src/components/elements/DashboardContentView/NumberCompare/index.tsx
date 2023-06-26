import { H3Text, HStack, Text } from '@components/common';
import { NoneDash } from '../Error/NoneDash';
import { Arrow } from './Arrow';

type NumberCompareProps = {
  curr: number;
  last: number;
  unit: string;
};

export const NumberCompare = ({ curr, last, unit }: NumberCompareProps) => {
  const diff = curr - last;
  const color = diff > 0 ? '#00C48C' : '#FF3D71';

  return (
    <HStack h="100%" spacing="2rem">
      <HStack align="baseline">
        <H3Text>{curr.toLocaleString()}</H3Text>
        <Text>{unit}</Text>
      </HStack>
      <HStack spacing="0.5rem">
        {diff !== 0 ? (
          <>
            <Arrow direction={diff > 0 ? 'up' : 'down'} />
            <H3Text color={color}>{Math.abs(diff).toLocaleString()}</H3Text>
          </>
        ) : (
          <NoneDash />
        )}
      </HStack>
    </HStack>
  );
};
