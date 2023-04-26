import { HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';

type NumberDefaultProps = {
  number: number;
  unit?: string;
};

export const NumberDefault = ({ number, unit }: NumberDefaultProps) => {
  const theme = useTheme();

  return (
    <HStack h="100%">
      <HStack align="baseline">
        <Text fontSize={theme.fonts.size.h3}>{number.toLocaleString()}</Text>
        <Text>{unit}</Text>
      </HStack>
    </HStack>
  );
};
