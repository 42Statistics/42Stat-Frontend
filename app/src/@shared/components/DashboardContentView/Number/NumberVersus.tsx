import { useTheme } from '@emotion/react';

import type { UserProfile } from '@shared/types/UserProfile';
import { Avatar, H3MediumText, HStack, Text } from '@shared/ui-kit';

type NumberVersusProps = {
  userProfile1: UserProfile;
  number1: number;
  userProfile2: UserProfile;
  number2: number;
  unit?: string;
};

export const NumberVersus = ({
  userProfile1,
  number1,
  userProfile2,
  number2,
  unit,
}: NumberVersusProps) => {
  const theme = useTheme();

  const { imgUrl: imgUrl1, login: name1 } = userProfile1;
  const { imgUrl: imgUrl2, login: name2 } = userProfile2;

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
