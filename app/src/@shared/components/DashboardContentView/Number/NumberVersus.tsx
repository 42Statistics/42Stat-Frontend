import { useTheme } from '@emotion/react';
import { Avatar, Body1Text, H2MediumText, HStack } from '@shared/ui-kit';

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
    <HStack spacing="3rem">
      <HStack spacing="1rem">
        <Avatar size="xs" src={imgUrl1} />
        <HStack align="baseline" spacing="0.15rem">
          <H2MediumText
            color={
              number1 >= number2
                ? theme.colors.mono.black
                : theme.colors.mono.gray300
            }
          >
            {number1.toLocaleString()}
          </H2MediumText>
          {unit ? (
            <Body1Text
              color={
                number1 >= number2
                  ? theme.colors.mono.black
                  : theme.colors.mono.gray300
              }
            >
              {unit}
            </Body1Text>
          ) : null}
        </HStack>
      </HStack>
      <HStack spacing="1rem">
        <Avatar size="xs" src={imgUrl2} />
        <HStack align="baseline" spacing="0.15rem">
          <H2MediumText
            color={
              number1 <= number2
                ? theme.colors.mono.black
                : theme.colors.mono.gray300
            }
          >
            {number2.toLocaleString()}
          </H2MediumText>
          {unit ? (
            <Body1Text
              color={
                number1 <= number2
                  ? theme.colors.mono.black
                  : theme.colors.mono.gray300
              }
            >
              {unit}
            </Body1Text>
          ) : null}
        </HStack>
      </HStack>
    </HStack>
  );
};
