import { H1BoldText, HStack, Text } from '@components/common';

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
    <HStack align="baseline" spacing="0.15rem">
      <H1BoldText>
        {fixedNumber === undefined
          ? number.toLocaleString()
          : number.toFixed(2)}
      </H1BoldText>
      <Text>{unit}</Text>
    </HStack>
  );
};
