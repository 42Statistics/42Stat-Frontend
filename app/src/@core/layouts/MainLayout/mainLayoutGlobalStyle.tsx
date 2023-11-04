import { Theme, css } from '@emotion/react';

export const mainLayoutGlobalStyle = (theme: Theme) => css`
  body {
    background-color: ${theme.colors.background.main.default};
  }
`;
