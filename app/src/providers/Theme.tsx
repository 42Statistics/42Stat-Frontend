import { theme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';

const Provider = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
