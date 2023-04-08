import { HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';
import { BsTriangleFill } from 'react-icons/bs';

type TextCompareProps = {
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
      size="18px"
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

export const TextCompare = ({ curr, last, unit }: TextCompareProps) => {
  const theme = useTheme();
  const diff = curr - last;

  return (
    <HStack w="100%" h="100%" spacing="2rem">
      <Text
        fontSize={theme.fonts.size.h3}
      >{`${curr.toLocaleString()}${unit}`}</Text>
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
