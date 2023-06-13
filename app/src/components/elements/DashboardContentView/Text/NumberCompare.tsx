import { H3Text, HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { BsTriangleFill } from '@react-icons/all-files/bs/BsTriangleFill';
import { NoneDash } from '../NoneDash';

type NumberCompareProps = {
  curr: number;
  last: number;
  unit: string;
};

const Arrow = ({ direction }: { direction: 'up' | 'down' }) => {
  return (
    <BsTriangleFill
      size="12px"
      color={direction === 'up' ? '#00C48C' : '#FF3D71'}
      style={{
        transform: direction === 'up' ? 'rotate(0deg)' : 'rotate(180deg)',
      }}
    />
  );
};

export const NumberCompare = ({ curr, last, unit }: NumberCompareProps) => {
  const theme = useTheme();
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
