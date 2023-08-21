import { Palette, paletteAtom } from '@shared/atoms/paletteAtom';
import { useAtomValue } from 'jotai';
import { defaultLightOptions } from '../options';
import { defaultDarkOptions } from '../options/defaultOptions';

export const useDefaultOptions = () => {
  const palette = useAtomValue(paletteAtom);

  const getDefaultOptions = (palette: Palette) => {
    switch (palette) {
      case 'light':
        return defaultLightOptions;
      case 'dark':
        return defaultDarkOptions;
      default:
        return defaultLightOptions;
    }
  };

  return {
    defaultOptions: getDefaultOptions(palette),
  };
};
