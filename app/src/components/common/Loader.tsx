import { useTheme } from '@emotion/react';
import { PulseLoader } from 'react-spinners';
import { Center } from './Center';

export const Loader = () => {
  const theme = useTheme();

  return (
    <Center w="100%" h="100%">
      <PulseLoader
        size={10}
        color={theme.colors.mono.gray100}
        speedMultiplier={0.7}
      />
    </Center>
  );
};
