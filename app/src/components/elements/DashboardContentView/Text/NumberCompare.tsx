import { HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';
import { BsTriangleFill } from 'react-icons/bs';

type NumberCompareProps = {
  curr: number;
  last: number;
  unit: string;
};

type ArrowType = {
  direction: 'up' | 'down';
};

const Arrow = ({ direction }: ArrowType) => {
  const theme = useTheme();
  return (
    <BsTriangleFill
      size="12px"
      color={
        direction === 'up'
          ? theme.colors.secondary.default
          : theme.colors.third.default
      }
      style={{
        transform: direction === 'up' ? 'rotate(0deg)' : 'rotate(180deg)',
      }}
    />
  );
};

export const NumberCompare = ({ curr, last, unit }: NumberCompareProps) => {
  const theme = useTheme();
  const diff = curr - last;

  return (
    <HStack h="100%" spacing="2rem">
      <HStack align="baseline">
        <Text fontSize={theme.fonts.size.h3}>{curr.toLocaleString()}</Text>
        <Text>{unit}</Text>
      </HStack>
      <HStack spacing="0.5rem">
        <Arrow direction={diff >= 0 ? 'up' : 'down'} />
        <Text
          fontSize={theme.fonts.size.h3}
          color={
            diff >= 0
              ? theme.colors.secondary.default
              : theme.colors.third.default
          }
        >
          {Math.abs(diff).toLocaleString()}
        </Text>
      </HStack>
    </HStack>
  );
};