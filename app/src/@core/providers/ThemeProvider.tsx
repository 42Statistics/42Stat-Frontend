import { ThemeProvider } from '@emotion/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState, useEffect } from 'react';

import { darkTheme } from '@core/styles/darkTheme';
import { lightTheme } from '@core/styles/lightTheme';
import { paletteAtom } from '@shared/atoms/paletteAtom';
import {
  ThemePreference,
  themePreferenceAtom,
} from '@shared/atoms/themePreferenceAtom';
import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  const themePreference = useAtomValue(themePreferenceAtom);
  const setPalette = useSetAtom(paletteAtom);
  const [theme, setTheme] = useState(lightTheme);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: Dark)').matches;

  useEffect(() => {
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

    setTheme(getTheme(themePreference));
  }, [themePreference, prefersDark, setPalette]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
