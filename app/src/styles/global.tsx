import { css } from '@emotion/react';

export const global = css`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('fonts/NotoSansKR-Light.otf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('fonts/NotoSansKR-Regular.otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('fonts/NotoSansKR-Medium.otf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('fonts/NotoSansKR-Bold.otf');
    font-weight: 700;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #e4e3ea; // FIXME: Global이라 theme 적용 방법을 모르겠다.
  }

  * {
    box-sizing: border-box;
  }
`;
