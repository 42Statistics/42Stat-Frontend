import { defaultTheme } from '@/styles/defaultTheme';
import { ThemeProvider } from '@emotion/react';

const Provider = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Provider;
