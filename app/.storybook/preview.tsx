import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import { lightTheme } from '../src/@core/styles/lightTheme';
import { global } from '../src/@core/styles/global';
import { reset } from '../src/@core/styles/reset';

const preview: Preview = {
  parameters: {
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
      <ThemeProvider theme={lightTheme}>
        <Global styles={[reset, global]} />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
