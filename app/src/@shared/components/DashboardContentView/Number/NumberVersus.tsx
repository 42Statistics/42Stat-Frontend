import { useTheme } from '@emotion/react';
import {
  Body1Text,
  H2MediumText,
  H3MediumText,
  HStack,
  Text,
} from '@shared/ui-kit';
import { NoneDash } from '../Error';
import { Diff } from './Diff';

type NumberVersusProps = {
  number1: number;
  number2: number;
  unit?: string;
};

export const NumberVersus = ({ number1, number2, unit }: NumberVersusProps) => {
  const theme = useTheme();

  return (
    <HStack align="baseline" spacing="2rem">
      <HStack align="baseline" spacing="0.6rem">
        <HStack align="baseline" spacing="0.15rem">
          <H2MediumText>{number1.toLocaleString()}</H2MediumText>
          {unit ? <Body1Text>{unit}</Body1Text> : null}
        </HStack>
        <Text color={theme.colors.mono.gray300}>:</Text>
        <HStack align="baseline" spacing="0.15rem">
          <H3MediumText color={theme.colors.mono.gray300}>
            {number2.toLocaleString()}
          </H3MediumText>
          {unit ? <Text color={theme.colors.mono.gray300}>{unit}</Text> : null}
        </HStack>
      </HStack>
      {number1 !== number2 ? (
        <Diff number1={number1} number2={number2} />
      ) : (
        <NoneDash />
      )}
    </HStack>
  );
};
