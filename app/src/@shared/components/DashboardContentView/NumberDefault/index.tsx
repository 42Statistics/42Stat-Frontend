import { H1MediumText, H3Text, HStack } from '@shared/ui-kit';

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
      <H1MediumText>
        {fixedNumber === undefined
          ? number.toLocaleString()
          : number.toFixed(2)}
      </H1MediumText>
      <H3Text>{unit}</H3Text>
    </HStack>
  );
};
