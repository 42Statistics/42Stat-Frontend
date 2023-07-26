import { H1MediumText, H3Text, HStack } from '@shared/ui-kit';
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
        <H1MediumText>{curr.toLocaleString()}</H1MediumText>
        <H3Text>{unit}</H3Text>
      </HStack>
      {curr !== last ? <Diff curr={curr} last={last} /> : <NoneDash />}
    </HStack>
  );
};
