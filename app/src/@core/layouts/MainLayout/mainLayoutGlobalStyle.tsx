import { css } from '@emotion/react';

export const mainLayoutGlobalStyle = (background: string) => css`
  body {
    background: ${background};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
