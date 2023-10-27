import { Theme, css } from '@emotion/react';

export const mainLayoutGlobalStyle = (theme: Theme) => css`
  html {
    background: ${theme.colors.mono.white};
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: '#fff';
  }
  body {
    background: ${theme.colors.background.main.default};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
