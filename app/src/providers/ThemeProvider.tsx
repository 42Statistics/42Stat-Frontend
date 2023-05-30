import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '@styles/defaultTheme';

const Provider = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Provider;
