import { useAtomValue } from 'jotai';
import { merge } from 'lodash-es';

import { Palette, paletteAtom } from '@shared/atoms/paletteAtom';

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

const defaultOptions: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: true,
      tools: {
        download: false,
        selection: false,
        zoomin: true,
        zoomout: true,
        zoom: true,
        pan: true,
        reset: true,
      },
      autoSelected: 'pan',
    },
    fontFamily:
      "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 0.9,
      },
    },
    active: {
      filter: {
        type: 'darken',
        value: 0.8,
      },
    },
  },
};

export const defaultLightOptions = defaultOptions;

export const defaultDarkOptions: ApexCharts.ApexOptions = merge(
  {},
  defaultOptions,
  {
    theme: {
      mode: 'dark',
    },
    // chart: {
    //   dropShadow: {
    //     enabled: true,
    //   },
    // },
    grid: {
      borderColor: '#555555',
    },
  },
);
