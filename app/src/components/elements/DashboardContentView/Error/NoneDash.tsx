import { useTheme } from '@emotion/react';
import { BsDash } from '@react-icons/all-files/bs/BsDash';

export const NoneDash = () => {
  const theme = useTheme();

  return <BsDash size="12px" color={theme.colors.mono.black} />;
};
