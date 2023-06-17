import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import { defaultTheme } from '../src/styles/defaultTheme';
import { global } from '../src/styles/global';
import { reset } from '../src/styles/reset';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Global styles={[reset, global]} />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
