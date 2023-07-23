import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '@shared/styles/defaultTheme';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Provider;
