import { Theme, css } from '@emotion/react';

export const mainLayoutGlobalStyle = (theme: Theme) => css`
  html {
    background-color: ${theme.colors.mono.white};
    background: ${theme.colors.background.main.default};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  body {
    background: ${theme.colors.background.main.default};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
