import { AppLogoSvg } from '@/assets/AppLogoSvg';
import { Center } from '@/components/common';
import { useTheme } from '@emotion/react';

export const ApolloNotFound = () => {
  const theme = useTheme();
  console.log('Not Found'); // for development
  return (
    <Center w="100%" h="100%">
      <AppLogoSvg width="70px" fill={theme.colors.mono.gray.light} />
    </Center>
  );
};
