import { Avatar, HStack, Text, VStack } from '@/styles/components';
import { useTheme } from '@emotion/react';

type NavProfile = {
  imageUrl: string;
  name: string;
  login: string;
};

export const NavProfile = ({ imageUrl, name, login }: NavProfile) => {
  const theme = useTheme();

  return (
    <HStack spacing="1.4rem">
      <Avatar size="4rem" src={imageUrl} />
      <VStack w="8rem" align="start" spacing="0.3rem">
        <Text
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.bold}
        >
          {name}
        </Text>
        <Text
          fontSize={theme.fonts.size.caption}
          color={theme.colors.mono.gray.default}
        >
          {login}
        </Text>
      </VStack>
    </HStack>
  );
};
