import { H1BoldText, HStack, Text } from '@components/common';
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
        <H1BoldText>{curr.toLocaleString()}</H1BoldText>
        <Text>{unit}</Text>
      </HStack>
      {curr !== last ? <Diff curr={curr} last={last} /> : <NoneDash />}
    </HStack>
  );
};
