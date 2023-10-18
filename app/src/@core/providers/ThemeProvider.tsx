import { darkTheme } from '@core/styles/darkTheme';
import { lightTheme } from '@core/styles/lightTheme';
import { ThemeProvider } from '@emotion/react';
import { paletteAtom } from '@shared/atoms/paletteAtom';
import {
  ThemePreference,
  themePreferenceAtom,
} from '@shared/atoms/themePreferenceAtom';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useAtomValue, useSetAtom } from 'jotai';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  const themePreference = useAtomValue(themePreferenceAtom);
  const setPalette = useSetAtom(paletteAtom);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: Dark)').matches;

  const getTheme = (themePreference: ThemePreference) => {
    switch (themePreference) {
      case 'light':
        setPalette('light');
        return lightTheme;
      case 'dark':
        setPalette('dark');
        return darkTheme;
      case 'system':
        if (prefersDark) {
          setPalette('dark');
          return darkTheme;
        }
        setPalette('light');
        return lightTheme;
      default:
        setPalette('light');
        return lightTheme;
    }
  };

  const theme = getTheme(themePreference);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
