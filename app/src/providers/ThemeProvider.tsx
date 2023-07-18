import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '@styles/defaultTheme';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Provider;
