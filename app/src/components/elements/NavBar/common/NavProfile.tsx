import { Avatar, HStack, Text, VStack } from '@/components/common';
import { titleCase } from '@/utils/titleCase';
import { useTheme } from '@emotion/react';

type NavProfile = {
  imgUrl: string;
  name: string;
  login: string;
};

export const NavProfile = ({ imgUrl, name, login }: NavProfile) => {
  const theme = useTheme();

  return (
    <HStack spacing="1.4rem">
      <Avatar size="4.5rem" imgUrl={imgUrl} />
      <VStack w="100%" align="start" spacing="0.3rem">
        <Text
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.bold}
        >
          {login}
        </Text>
        <Text
          fontSize={theme.fonts.size.caption}
          color={theme.colors.mono.gray.default}
        >
          {titleCase(name)}
        </Text>
      </VStack>
    </HStack>
  );
};
