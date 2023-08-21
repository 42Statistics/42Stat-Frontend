import { darkTheme } from '@core/styles/darkTheme';
import { lightTheme } from '@core/styles/lightTheme';
import { ThemeProvider } from '@emotion/react';
import { paletteAtom } from '@shared/atoms/paletteAtom';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useAtomValue } from 'jotai';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  const palette = useAtomValue(paletteAtom);

  const getTheme = (palette: string) => {
    switch (palette) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      case 'system':
        return lightTheme; // TODO: Implement following system theme
      default:
        return lightTheme;
    }
  };

  const theme = getTheme(palette);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
