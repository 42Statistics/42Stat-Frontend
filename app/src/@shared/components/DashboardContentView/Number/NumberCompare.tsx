import { Body1Text, H2MediumText, HStack } from '@shared/ui-kit';
import { NoneDash } from '../Error/NoneDash';
import { Diff } from './Diff';

type NumberCompareProps = {
  curr: number;
  last: number;
  unit: string;
};

export const NumberCompare = ({ curr, last, unit }: NumberCompareProps) => {
  return (
    <HStack spacing="2rem" align="baseline">
      <HStack align="baseline" spacing="0.15rem">
        <H2MediumText>{curr.toLocaleString()}</H2MediumText>
        <Body1Text>{unit}</Body1Text>
      </HStack>
      {curr !== last ? <Diff number1={curr} number2={last} /> : <NoneDash />}
    </HStack>
  );
};
