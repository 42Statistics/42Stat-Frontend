import { Center } from '@components/common';
import { useTheme } from '@emotion/react';
import { BsDash } from '@react-icons/all-files/bs/BsDash';

export const NoneDash = () => {
  const theme = useTheme();

  return (
    <Center w="100%">
      <BsDash size="12px" color={theme.colors.mono.black} />
    </Center>
  );
};
