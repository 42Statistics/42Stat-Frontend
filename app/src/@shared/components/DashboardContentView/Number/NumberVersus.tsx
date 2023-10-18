import { useTheme } from '@emotion/react';
import { Avatar, H3MediumText, HStack, Text } from '@shared/ui-kit';

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
          <H3MediumText
            color={
              number1 >= number2
                ? theme.colors.mono.black
                : theme.colors.mono.gray500
            }
          >
            {number1.toLocaleString()}
          </H3MediumText>
          {unit ? (
            <Text
              color={
                number1 >= number2
                  ? theme.colors.mono.black
                  : theme.colors.mono.gray500
              }
            >
              {unit}
            </Text>
          ) : null}
        </HStack>
      </HStack>
      <HStack spacing="1rem">
        <Avatar size="xs" src={imgUrl2} />
        <HStack align="baseline" spacing="0.15rem">
          <H3MediumText
            color={
              number1 <= number2
                ? theme.colors.mono.black
                : theme.colors.mono.gray500
            }
          >
            {number2.toLocaleString()}
          </H3MediumText>
          {unit ? (
            <Text
              color={
                number1 <= number2
                  ? theme.colors.mono.black
                  : theme.colors.mono.gray500
              }
            >
              {unit}
            </Text>
          ) : null}
        </HStack>
      </HStack>
    </HStack>
  );
};
