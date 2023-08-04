import { useTheme } from '@emotion/react';
import { Avatar, HStack, MediumText, Text } from '@shared/ui-kit';

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
        <Avatar size={number1 >= number2 ? 'sm' : 'xs'} src={imgUrl1} />
        <HStack align="baseline" spacing="0.15rem">
          <MediumText
            color={
              number1 >= number2
                ? theme.colors.mono.black
                : theme.colors.mono.gray300
            }
            fontSize={
              number1 >= number2 ? theme.fonts.size.h2 : theme.fonts.size.body1
            }
          >
            {number1.toLocaleString()}
          </MediumText>
          {unit ? (
            <Text
              color={
                number1 >= number2
                  ? theme.colors.mono.black
                  : theme.colors.mono.gray300
              }
              fontSize={
                number1 >= number2
                  ? theme.fonts.size.body1
                  : theme.fonts.size.body2
              }
            >
              {unit}
            </Text>
          ) : null}
        </HStack>
      </HStack>
      <HStack spacing="1rem">
        <Avatar size={number1 <= number2 ? 'sm' : 'xs'} src={imgUrl2} />
        <HStack align="baseline" spacing="0.15rem">
          <MediumText
            color={
              number1 <= number2
                ? theme.colors.mono.black
                : theme.colors.mono.gray300
            }
            fontSize={
              number1 <= number2 ? theme.fonts.size.h2 : theme.fonts.size.body1
            }
          >
            {number2.toLocaleString()}
          </MediumText>
          {unit ? (
            <Text
              color={
                number1 <= number2
                  ? theme.colors.mono.black
                  : theme.colors.mono.gray300
              }
              fontSize={
                number1 <= number2
                  ? theme.fonts.size.body1
                  : theme.fonts.size.body2
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
