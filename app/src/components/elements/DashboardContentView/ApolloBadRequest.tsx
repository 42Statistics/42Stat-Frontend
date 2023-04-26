import { AppLogoSvg } from '@/assets/AppLogoSvg';
import { VStack } from '@/components/common';
import { useTheme } from '@emotion/react';

export const ApolloBadRequest = ({ msg }: { msg?: string }) => {
  const theme = useTheme();
  if (msg) console.log(msg); // for development
  return (
    <VStack w="100%" h="100%">
      <AppLogoSvg width="70px" fill={theme.colors.mono.gray.light} />
    </VStack>
  );
};
