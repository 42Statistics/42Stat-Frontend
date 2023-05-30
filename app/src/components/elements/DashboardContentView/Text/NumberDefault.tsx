import { H3Text, HStack, Text } from '@components/common';

type NumberDefaultProps = {
  number: number;
  unit?: string;
};

export const NumberDefault = ({ number, unit }: NumberDefaultProps) => {
  return (
    <HStack h="100%">
      <HStack align="baseline">
        <H3Text>{number.toLocaleString()}</H3Text>
        <Text>{unit}</Text>
      </HStack>
    </HStack>
  );
};
