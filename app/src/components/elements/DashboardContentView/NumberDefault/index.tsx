import { H3Text, HStack, Text } from '@components/common';

type NumberDefaultProps = {
  number: number;
  unit?: string;
  fixedNumber?: number;
};

export const NumberDefault = ({
  number,
  unit,
  fixedNumber,
}: NumberDefaultProps) => {
  return (
    <HStack h="100%">
      <HStack align="baseline">
        <H3Text>
          {fixedNumber === undefined
            ? number.toLocaleString()
            : number.toFixed(2)}
        </H3Text>
        <Text>{unit}</Text>
      </HStack>
    </HStack>
  );
};
