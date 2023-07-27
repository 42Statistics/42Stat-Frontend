import { Body1Text, H2MediumText, HStack } from '@shared/ui-kit';

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
      <H2MediumText>
        {fixedNumber === undefined
          ? number.toLocaleString()
          : number.toFixed(2)}
      </H2MediumText>
      <Body1Text>{unit}</Body1Text>
    </HStack>
  );
};
