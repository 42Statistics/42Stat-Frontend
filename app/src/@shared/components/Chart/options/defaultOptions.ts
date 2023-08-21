import { merge } from 'lodash-es';

const defaultOptions: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
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
  },
);
