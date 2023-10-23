import { useTheme } from '@emotion/react';

import type { UserProfile } from '@shared/__generated__/graphql';
import { Avatar, H3MediumText, HStack, Text } from '@shared/ui-kit';

type NumberVersusProps = {
  userData1: UserProfile;
  number1: number;
  userData2: UserProfile;
  number2: number;
  unit?: string;
};

export const NumberVersus = ({
  userData1,
  number1,
  userData2,
  number2,
  unit,
}: NumberVersusProps) => {
  const theme = useTheme();

  const { imgUrl: imgUrl1, login: name1 } = userData1;
  const { imgUrl: imgUrl2, login: name2 } = userData2;

  return (
    <HStack spacing="3rem">
      <HStack spacing="1rem">
        <Avatar size="xs" src={imgUrl1} name={name1} />
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
        <Avatar size="xs" src={imgUrl2} name={name2} />
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
