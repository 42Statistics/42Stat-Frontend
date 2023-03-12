import { theme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

const Provider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
