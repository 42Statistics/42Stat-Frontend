import { HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';
import { BsTriangleFill } from 'react-icons/bs';

type CompareBoardPropType = {
  curr: number;
  last: number;
  unit: string;
};

export const CompareBoard = ({ curr, last, unit }: CompareBoardPropType) => {
  const theme = useTheme();
  const diff = curr - last;

  return (
    <>
      <HStack spacing="0.5rem">
        <Text fontSize={theme.fonts.size.h3} style={{ marginRight: '1rem' }}>
          {curr} {unit}{' '}
        </Text>
        {diff >= 0 ? (
          <BsTriangleFill
            size="1.8rem"
            color={theme.colors.secondary.default}
          />
        ) : (
          <BsTriangleFill
            size="1.8rem"
            color={theme.colors.third.default}
            style={{ transform: 'rotate(180deg)' }}
          />
        )}
        <Text
          fontSize={theme.fonts.size.h3}
          color={
            diff >= 0
              ? theme.colors.secondary.default
              : theme.colors.third.default
          }
        >
          {Math.abs(diff)}
        </Text>
      </HStack>
    </>
  );
};
