import { useTheme } from '@emotion/react';
import {
  Avatar,
  Body1Text,
  H2MediumText,
  H3MediumText,
  HStack,
  Text,
  VStack,
} from '@shared/ui-kit';
import { NoneDash } from '../Error';
import { Diff } from './Diff';

type NumberVersusProps = {
  imgUrl1: string | null | undefined;
  number1: number;
  imgUrl2: string | null | undefined;
  number2: number;
  unit?: string;
};

export const NumberVersus = ({
  imgUrl1,
  number1,
  imgUrl2,
  number2,
  unit,
}: NumberVersusProps) => {
  const theme = useTheme();

  return (
    <VStack spacing="2rem">
      <HStack align="baseline" spacing="2rem">
        <HStack spacing="0.5rem">
          <Avatar size="xs" src={imgUrl1} />
          <HStack align="baseline" spacing="0.15rem">
            <H2MediumText>{number1.toLocaleString()}</H2MediumText>
            {unit ? <Body1Text>{unit}</Body1Text> : null}
          </HStack>
        </HStack>
        <HStack spacing="0.5rem">
          <Avatar size="xs" src={imgUrl2} />
          <HStack align="baseline" spacing="0.15rem">
            <H3MediumText color={theme.colors.mono.gray300}>
              {number2.toLocaleString()}
            </H3MediumText>
            {unit ? (
              <Text color={theme.colors.mono.gray300}>{unit}</Text>
            ) : null}
          </HStack>
        </HStack>
      </HStack>
      {number1 !== number2 ? (
        <Diff number1={number1} number2={number2} />
      ) : (
        <NoneDash />
      )}
    </VStack>
  );
};
